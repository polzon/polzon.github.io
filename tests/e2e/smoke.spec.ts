import { expect, test } from "@playwright/test";

test("home page renders the main intro and nav", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Zack Polson/);
  await expect(
    page.getByRole("heading", { name: "Zack Polson" }),
  ).toBeVisible();
  await expect(page.getByText("About Me:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Home" })).toHaveAttribute(
    "href",
    /\/$/,
  );
  await expect(page.getByRole("link", { name: "Blog" })).toHaveAttribute(
    "href",
    /\/blog\/$/,
  );
  await expect(page.getByRole("link", { name: "Game" })).toHaveAttribute(
    "href",
    /\/game\/$/,
  );
});

test("blog page loads its placeholder content", async ({ page }) => {
  await page.goto("/blog");

  await expect(page.getByText("blog stuff will be here")).toBeVisible();
});

test("game page exposes browser play and download links", async ({ page }) => {
  await page.goto("/game");

  await expect(
    page.getByRole("heading", { name: "Quintessence" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Play in Browser" }),
  ).toHaveAttribute("href", /\/game\/play\/$/);
  await expect(
    page.getByRole("link", { name: "Direct Download" }),
  ).toHaveAttribute("href", /polzon\.itch\.io\/quintessence\/download/);
  await expect(page.getByRole("link", { name: "itch.io" })).toHaveAttribute(
    "href",
    "https://polzon.itch.io/quintessence",
  );
});

test("game play page renders the embedded itch.io frame", async ({ page }) => {
  await page.goto("/game/play");

  const frame = page.locator('iframe[title="Quintessence"]');

  await expect(frame).toBeVisible();
  await expect(frame).toHaveAttribute(
    "src",
    /https:\/\/itch\.io\/embed-upload\/16528022\?color=181a1b/,
  );
});
