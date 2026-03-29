import GameEmbed from "./embed";
import styles from "./page.module.css";

export default function PlayPage() {
  return (
    <div className={`play-page-root ${styles.root}`}>
      <GameEmbed />
    </div>
  );
}
