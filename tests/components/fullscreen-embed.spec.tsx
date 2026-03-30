import { expect, test } from "@playwright/experimental-ct-react";
import {
  getFullscreenButton,
  mountFullscreenEmbed,
} from "./support/fullscreenEmbedTestUtils";

test("shows a fullscreen button when the API is supported", async ({
  mount,
  page,
}) => {
  const component = await mountFullscreenEmbed(mount, page, { isSupported: true });

  await expect(getFullscreenButton(component)).toBeVisible();
});

test("hides the fullscreen button when the API is unavailable", async ({
  mount,
  page,
}) => {
  const component = await mountFullscreenEmbed(mount, page, {
    isSupported: false,
  });

  await expect(getFullscreenButton(component)).toHaveCount(0);
});

test("removes the button after entering fullscreen", async ({
  mount,
  page,
}) => {
  const component = await mountFullscreenEmbed(mount, page, { isSupported: true });

  const button = getFullscreenButton(component);
  await button.click({ force: true });

  await expect(getFullscreenButton(component)).toHaveCount(0);
});
