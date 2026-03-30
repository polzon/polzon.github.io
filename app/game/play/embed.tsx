// Component to embed the game frame to the entire screen's width.

import EmbedItchIoFrame from "./itchio_embed";
import FullscreenEmbed from "./fullscreen_embed";

export default function EmbedFrame({
  embedWidth,
  embedHeight,
  showBanner,
}: {
  embedWidth?: string;
  embedHeight?: string;
  showBanner?: boolean;
}) {
  const resolvedWidth = embedWidth ?? "100%";
  const resolvedHeight = embedHeight ?? "100%";

  return (
    <FullscreenEmbed width={resolvedWidth} height={resolvedHeight}>
      <EmbedItchIoFrame showBanner={showBanner} />
    </FullscreenEmbed>
  );
}
