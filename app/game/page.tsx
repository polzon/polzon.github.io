import Link from "next/link";
import GameDownload from "./download";

export default function GamePage() {
  return (
    <div>
      <h1>Quintessence</h1>
      <p>
        <Link href="/game/play">Play in browser</Link>
      </p>
      <GameDownload />
      <p>
        <Link href={"https://polzon.itch.io/quintessence"}>itch.io</Link>
      </p>
    </div>
  );
}
