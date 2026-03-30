import Link from "next/link";
import GameDownload from "./components/GameDownload";

export default function GamePage() {
  return (
    <div>
      <h1>Quintessence</h1>
      <p>
        <Link href="/game/play">Play in Browser</Link>
      </p>
      <GameDownload />
      <p>
        <Link href={"https://polzon.itch.io/quintessence"}>itch.io</Link>
      </p>
    </div>
  );
}
