import { expect, test } from "@playwright/test";
import { openPage, ROUTES } from "../support/siteAssertions";

const GAME_TITLE = "Quintessence";
const GAME_IFRAME_SRC_PATTERN =
  /https:\/\/itch\.io\/embed-upload\/16528022\?color=181a1b/;

test("game play route renders the embedded itch.io frame", async ({ page }) => {
  await openPage(page, ROUTES.gamePlay);

  const frame = page.locator(`iframe[title="${GAME_TITLE}"]`);
  await expect(frame).toBeVisible();
  await expect(frame).toHaveAttribute("src", GAME_IFRAME_SRC_PATTERN);
});

test.describe("game play route - viewport tests", () => {
  const desktopViewports = [
    { width: 1920, height: 1080, label: "1920x1080" },
    { width: 1440, height: 900, label: "1440x900" },
    { width: 1280, height: 720, label: "1280x720" },
  ];

  for (const viewport of desktopViewports) {
    test(`${viewport.label} - iframe fills width and height with no scroll bars`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await openPage(page, ROUTES.gamePlay);

      const frame = page.locator(`iframe[title="${GAME_TITLE}"]`);
      await expect(frame).toBeVisible();

      // Check that iframe reaches full width
      const frameBox = await frame.boundingBox();
      const pageWidth = await page.evaluate(() => window.innerWidth);
      expect(frameBox?.width).toBe(pageWidth);

      // Check no scroll bars appear on the page
      const hasHorizontalScroll = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      const hasVerticalScroll = await page.evaluate(
        () => document.documentElement.scrollHeight > window.innerHeight,
      );
      expect(hasHorizontalScroll).toBe(false);
      expect(hasVerticalScroll).toBe(false);

      // Verify iframe is stretched to bottom (positioned at top of container and grows to fill available space)
      const framePosition = await frame.evaluate((el) => {
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height,
        };
      });

      // Frame should start near top and have substantial height (not constrained)
      expect(framePosition.top).toBeLessThan(300); // Should be near the top
      expect(framePosition.height).toBeGreaterThan(viewport.height * 0.5); // Should take up significant vertical space
    });
  }
});

test.describe("game play route - narrow viewport tests", () => {
  const narrowViewports = [
    { width: 1920, height: 269, label: "1920x269" },
    { width: 1920, height: 240, label: "1920x240" },
    { width: 1920, height: 200, label: "1920x200" },
  ];

  for (const viewport of narrowViewports) {
    test(`${viewport.label} - vertical scroll bar appears on narrow height`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await openPage(page, ROUTES.gamePlay);

      const frame = page.locator(`iframe[title="${GAME_TITLE}"]`);
      await expect(frame).toBeVisible();

      // Check that vertical scroll bar appears (content exceeds viewport height)
      const hasVerticalScroll = await page.evaluate(
        () => document.documentElement.scrollHeight > window.innerHeight,
      );
      expect(hasVerticalScroll).toBe(true);

      // Horizontal scroll bar should still not appear
      const hasHorizontalScroll = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(hasHorizontalScroll).toBe(false);
    });
  }
});
