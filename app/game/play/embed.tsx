const ITCHIO_FOOTER_CROP_PX = 20;

export default function GameEmbed({
  embed_width,
  embed_height,
  show_banner,
}: {
  embed_width?: string;
  embed_height?: string;
  show_banner?: boolean;
}) {
  const footerCropMargin = show_banner ? "0" : `-${ITCHIO_FOOTER_CROP_PX}px`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        height: embed_height ?? "100%",
        width: embed_width ?? "100%",
      }}
    >
      <iframe
        src="https://itch.io/embed-upload/16528022?color=181a1b"
        allowFullScreen
        title="Quintessence"
        style={{
          display: "block",
          flex: 1,
          minHeight: 0,
          width: "100%",
          height: "100%",
          marginBottom: footerCropMargin,
          border: 0,
        }}
      />
    </div>
  );
}
