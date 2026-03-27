const EMBED_WIDTH = "94vw";
const EMBED_HEIGHT = "calc(100vh - 11em)";
const ITCHIO_FOOTER_CROP_PX = 20;

export default function GameEmbed() {
  return (
    <main
      style={{
        width: "100vw",
        maxWidth: "none",
        margin: 0,
        marginLeft: "calc(50% - 50vw)",
        padding: 0,
      }}
    >
      <div
        style={{
          width: EMBED_WIDTH,
          height: EMBED_HEIGHT,
          margin: "auto",
          overflow: "hidden",
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
    </main>
  );
}
