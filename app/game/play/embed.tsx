// Component to embed the game frame to the entire screen's width.

import styles from "./embed.module.css";
import EmbedItchIoFrame from "./itchio_embed";

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
    <div
      className={styles.container}
      style={{ width: resolvedWidth, height: resolvedHeight }}
    >
      <EmbedItchIoFrame showBanner={showBanner} />
    </div>
  );
}
