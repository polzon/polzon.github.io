import EmbedFrame from "./embed";
import styles from "./page.module.css";

export default function PlayPage() {
  return (
    <div className={`playPageRoot ${styles.root}`}>
      <EmbedFrame showBanner={false} />
    </div>
  );
}
