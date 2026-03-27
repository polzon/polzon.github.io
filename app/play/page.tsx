import GameDownload from "./download";
import GameEmbed from "./embed";

export default function GamePage() {
  return (
    <main>
      <GameEmbed />
      <GameDownload />
    </main>
  );
}
