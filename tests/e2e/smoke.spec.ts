import { expect, type Page, test } from "@playwright/test";
import { SITE_TITLE } from "../../app/lib/site";

const ROUTES = {
  home: "/",
  blog: "/blog",
  game: "/game",
  gamePlay: "/game/play",
  notFound: "/404.html",
} as const;

const NAV_LINKS: ReadonlyArray<{ label: string; hrefPattern: RegExp }> = [
  { label: "Home", hrefPattern: /\/$/ },
  { label: "Blog", hrefPattern: /\/blog\/$/ },
  { label: "Game", hrefPattern: /\/game\/$/ },
];

const GAME_TITLE = "Quintessence";
const ABOUT_TEXT = "About Me:";
const NOT_FOUND_LABEL = "404:";

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

const GAME_IFRAME_SRC_PATTERN =
  /https:\/\/itch\.io\/embed-upload\/16528022\?color=181a1b/;

async function expectSiteTitle(page: Page): Promise<void> {
  await expect(page).toHaveTitle(new RegExp(SITE_TITLE));
}

async function openPage(page: Page, path: string): Promise<void> {
  await page.goto(path);
  await expectSiteTitle(page);
}

async function expectLinkHref(
  page: Page,
  label: string,
  hrefPattern: RegExp | string,
): Promise<void> {
  await expect(page.getByRole("link", { name: label })).toHaveAttribute(
    "href",
    hrefPattern,
  );
}

test("home page renders the main intro and nav", async ({ page }) => {
  await openPage(page, ROUTES.home);

  await expect(page.getByRole("heading", { name: SITE_TITLE })).toBeVisible();
  await expect(page.getByText(ABOUT_TEXT)).toBeVisible();
  for (const link of NAV_LINKS) {
    await expectLinkHref(page, link.label, link.hrefPattern);
  }
});

test("game page exposes browser play and download links", async ({ page }) => {
  await openPage(page, ROUTES.game);

  await expect(page.getByRole("heading", { name: GAME_TITLE })).toBeVisible();
  for (const link of GAME_LINKS) {
    await expectLinkHref(page, link.label, link.hrefPattern);
  }
});

test("game play page renders the embedded itch.io frame", async ({ page }) => {
  await openPage(page, ROUTES.gamePlay);

  const frame = page.locator(`iframe[title="${GAME_TITLE}"]`);

  await expect(frame).toBeVisible();
  await expect(frame).toHaveAttribute("src", GAME_IFRAME_SRC_PATTERN);
});

test("custom 404 page is exported and has return-home link", async ({
  page,
}) => {
  await openPage(page, ROUTES.notFound);

  await expect(page.getByText(NOT_FOUND_LABEL)).toBeVisible();
  await expectLinkHref(page, "Return home", ROUTES.home);
});
