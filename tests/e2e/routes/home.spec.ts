import { expect, test } from "@playwright/test";
import { SITE_TITLE } from "../../../app/lib/site";
import {
  NAV_LINKS,
  expectLinkHref,
  openPage,
  ROUTES,
} from "../support/siteAssertions";

const ABOUT_TEXT = "About Me:";

test("home route renders intro and header nav", async ({ page }) => {
  await openPage(page, ROUTES.home);

  await expect(page.getByRole("heading", { name: SITE_TITLE })).toBeVisible();
  await expect(page.getByText(ABOUT_TEXT)).toBeVisible();
  for (const link of NAV_LINKS) {
    await expectLinkHref(page, link.label, link.hrefPattern);
  }
});
