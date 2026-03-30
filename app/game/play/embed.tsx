// Component to embed the game frame to the entire screen's width.

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./embed.module.css";
import EmbedItchIoFrame from "./itchio_embed";

export default function EmbedFrame({
  embedWidth,
  embedHeight,
  showBanner,
}: {
  embedWidth?: string;
  embedHeight?: string;
  showBanner?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const resolvedWidth = embedWidth ?? "100%";
  const resolvedHeight = embedHeight ?? "100%";

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleToggleFullscreen = useCallback(async () => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    try {
      if (document.fullscreenElement === container) {
        await document.exitFullscreen();
      } else {
        await container.requestFullscreen();
      }
    } catch {
      setIsFullscreen(document.fullscreenElement === container);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.embedRoot}
      style={{ width: resolvedWidth, height: resolvedHeight }}
    >
      {!isFullscreen ? (
        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={handleToggleFullscreen}
        >
          Fullscreen
        </button>
      ) : null}
      <EmbedItchIoFrame showBanner={showBanner} />
    </div>
  );
}
