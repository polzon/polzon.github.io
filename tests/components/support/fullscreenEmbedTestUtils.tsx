import type {
  ComponentFixtures,
  MountResult,
} from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import FullscreenEmbed from "../../../app/game/play/fullscreen_embed";

export const FULLSCREEN_BUTTON_NAME = "Fullscreen";

type FullscreenEmbedOptions = {
  isSupported: boolean;
  width?: string;
  height?: string;
};

type MountComponent = ComponentFixtures["mount"];

export async function mockFullscreenSupport(
  page: Page,
  isSupported: boolean,
): Promise<void> {
  await page.evaluate((supported: boolean) => {
    let fullscreenElement: HTMLElement | null = null;

    Object.defineProperty(document, "fullscreenEnabled", {
      configurable: true,
      get: () => supported,
    });

    Object.defineProperty(Document.prototype, "fullscreenElement", {
      configurable: true,
      get: () => fullscreenElement,
    });

    Object.defineProperty(HTMLElement.prototype, "requestFullscreen", {
      configurable: true,
      value: supported
        ? async function requestFullscreen(this: HTMLElement) {
            fullscreenElement = this;
            document.dispatchEvent(new Event("fullscreenchange"));
          }
        : undefined,
    });
  }, isSupported);
}

export async function mountFullscreenEmbed(
  mount: MountComponent,
  page: Page,
  { isSupported, width = "640px", height = "480px" }: FullscreenEmbedOptions,
): Promise<MountResult> {
  await mockFullscreenSupport(page, isSupported);

  return mount(
    <FullscreenEmbed width={width} height={height}>
      <div>Game content</div>
    </FullscreenEmbed>,
  );
}

export function getFullscreenButton(component: MountResult): Locator {
  return component.getByRole("button", { name: FULLSCREEN_BUTTON_NAME });
}
