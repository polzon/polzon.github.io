import { expect, test } from "@playwright/test";
import { expectLinkHref, openPage, ROUTES } from "../support/siteAssertions";

const GAME_TITLE = "Quintessence";

const GAME_LINKS: ReadonlyArray<{
  label: string;
  hrefPattern: RegExp | string;
}> = [
  { label: "Play in Browser", hrefPattern: /\/game\/play\/$/ },
  {
    label: "Direct Download",
    hrefPattern: /polzon\.itch\.io\/quintessence\/download/,
  },
  { label: "itch.io", hrefPattern: "https://polzon.itch.io/quintessence" },
];

test("game route renders title and outbound links", async ({ page }) => {
  await openPage(page, ROUTES.game);

  await expect(page.getByRole("heading", { name: GAME_TITLE })).toBeVisible();
  for (const link of GAME_LINKS) {
    await expectLinkHref(page, link.label, link.hrefPattern);
  }
});
