import styles from "./embed.module.css";

const ITCHIO_TITLE = "Quintessence";
const ITCHIO_GAME_ID = "16528022";
const ITCHIO_COLOR = "181a1b";
const ITCHIO_FOOTER_CROP_PX = 20;

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
  const shouldShowBanner = showBanner ?? false;
  const footerCropMargin = shouldShowBanner
    ? "0"
    : `-${ITCHIO_FOOTER_CROP_PX}px`;

  return (
    <div
      className={styles.container}
      style={{ width: resolvedWidth, height: resolvedHeight }}
    >
      <iframe
        src={`https://itch.io/embed-upload/${ITCHIO_GAME_ID}?color=${ITCHIO_COLOR}`}
        allowFullScreen
        title={ITCHIO_TITLE}
        className={styles.frame}
        style={{ marginBottom: footerCropMargin }}
      />
    </div>
  );
}
