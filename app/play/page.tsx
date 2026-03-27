import GameEmbed from "./embed";
import GameDownload from "./download";

// const EMBED_WIDTH = "94vw";
const EMBED_WIDTH = "100%";
// const EMBED_HEIGHT = "calc(100vh - 14em)";
const EMBED_HEIGHT = "100%";

export default function GamePage() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        width: "100dvh",
        padding: "1em",
      }}
    >
      <div style={{ flex: 1, minHeight: "50em" }}>
        <GameEmbed embed_width={EMBED_WIDTH} embed_height={EMBED_HEIGHT} />
      </div>
      <GameDownload />
    </section>
  );
}
