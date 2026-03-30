"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./fullscreen_embed.module.css";

export default function FullscreenEmbed({
  width,
  height,
  children,
}: {
  width: string;
  height: string;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
      await container.requestFullscreen();
    } catch {
      setIsFullscreen(document.fullscreenElement === container);
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.root} style={{ width, height }}>
      {!isFullscreen ? (
        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={handleToggleFullscreen}
        >
          Fullscreen
        </button>
      ) : null}
      {children}
    </div>
  );
}
