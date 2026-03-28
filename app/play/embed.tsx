const ITCHIO_FOOTER_CROP_PX = 20;

export default function GameEmbed({
  embed_width,
  embed_height,
}: {
  embed_width?: string;
  embed_height?: string;
}) {
  return (
    <div
      style={{
        width: embed_width ?? "100dvw",
        height: embed_height,
        margin: "0 auto",
        overflow: "hidden",
        maxWidth: "100dvw",
      }}
    >
      <iframe
        src="https://itch.io/embed-upload/16528022?color=181a1b"
        allowFullScreen
        title="Quintessence"
        style={{
          display: "block",
          width: "100%",
          height: `calc(100% + ${ITCHIO_FOOTER_CROP_PX}px)`,
          border: 0,
        }}
      />
    </div>
  );
}
