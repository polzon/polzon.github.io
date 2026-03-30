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
