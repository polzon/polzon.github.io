import { expect, type Page } from "@playwright/test";
import { SITE_TITLE } from "../../../app/lib/site";

export const ROUTES = {
  home: "/",
  blog: "/blog",
  game: "/game",
  gamePlay: "/game/play",
  notFound: "/404.html",
} as const;

export const NAV_LINKS: ReadonlyArray<{ label: string; hrefPattern: RegExp }> =
  [
    { label: "Home", hrefPattern: /\/$/ },
    { label: "Blog", hrefPattern: /\/blog\/$/ },
    { label: "Game", hrefPattern: /\/game\/$/ },
  ];

export async function expectSiteTitle(page: Page): Promise<void> {
  await expect(page).toHaveTitle(new RegExp(SITE_TITLE));
}

export async function openPage(page: Page, path: string): Promise<void> {
  await page.goto(path);
  await expectSiteTitle(page);
}

export async function expectLinkHref(
  page: Page,
  label: string,
  hrefPattern: RegExp | string,
): Promise<void> {
  await expect(page.getByRole("link", { name: label })).toHaveAttribute(
    "href",
    hrefPattern,
  );
}
