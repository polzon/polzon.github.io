import { expect, test } from "@playwright/test";
import { expectLinkHref, openPage, ROUTES } from "../support/siteAssertions";

const NOT_FOUND_LABEL = "404:";

test("custom 404 route shows error and home link", async ({ page }) => {
  await openPage(page, ROUTES.notFound);

  await expect(page.getByText(NOT_FOUND_LABEL)).toBeVisible();
  await expectLinkHref(page, "Return home", ROUTES.home);
});
