import { expect, test, type Page, type Locator } from "@playwright/test";
import { openPage, ROUTES } from "../support/siteAssertions";

const GAME_TITLE = "Quintessence";
const GAME_IFRAME_SRC_PATTERN =
  /https:\/\/itch\.io\/embed-upload\/16528022\?color=181a1b/;

function getGameFrame(page: Page): Locator {
  return page.locator(`iframe[title="${GAME_TITLE}"]`);
}

async function verifyFrameVisibility(frame: Locator) {
  await expect(frame).toBeVisible();
  await expect(frame).toHaveAttribute("src", GAME_IFRAME_SRC_PATTERN);
}

async function checkScrollBars(page: Page) {
  const hasHorizontalScroll = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  const hasVerticalScroll = await page.evaluate(
    () => document.documentElement.scrollHeight > window.innerHeight,
  );
  return { hasHorizontalScroll, hasVerticalScroll };
}

async function verifyFrameWidth(page: Page, frame: Locator) {
  const frameBox = await frame.boundingBox();
  const pageWidth = await page.evaluate(() => window.innerWidth);
  expect(frameBox?.width).toBe(pageWidth);
}

async function verifyFramePositioning(
  page: Page,
  frame: Locator,
  viewportHeight: number,
) {
  const framePosition = await frame.evaluate((el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      height: rect.height,
    };
  });

  expect(framePosition.top).toBeLessThan(300);
  expect(framePosition.height).toBeGreaterThan(viewportHeight * 0.5);
}

test("game play route renders the embedded itch.io frame", async ({ page }) => {
  await openPage(page, ROUTES.gamePlay);

  const frame = getGameFrame(page);
  await verifyFrameVisibility(frame);
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
      await page.setViewportSize(viewport);
      await openPage(page, ROUTES.gamePlay);

      const frame = getGameFrame(page);
      await verifyFrameVisibility(frame);
      await verifyFrameWidth(page, frame);

      const { hasHorizontalScroll, hasVerticalScroll } =
        await checkScrollBars(page);
      expect(hasHorizontalScroll).toBe(false);
      expect(hasVerticalScroll).toBe(false);

      await verifyFramePositioning(page, frame, viewport.height);
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
      await page.setViewportSize(viewport);
      await openPage(page, ROUTES.gamePlay);

      const frame = getGameFrame(page);
      await verifyFrameVisibility(frame);

      const { hasHorizontalScroll, hasVerticalScroll } =
        await checkScrollBars(page);
      expect(hasVerticalScroll).toBe(true);
      expect(hasHorizontalScroll).toBe(false);
    });
  }
});
