"use client";

import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export default function GameDownload() {
  const [systemInfo, setSystemInfo] = useState("Detecting...");

  useEffect(() => {
    const parser = new UAParser(window.navigator.userAgent);
    const cpu = parser.getCPU();
    const os = parser.getOS();
    const osLabel = [os.name ?? "Unknown OS", os.version]
      .filter(Boolean)
      .join(" ");
    setSystemInfo(
      `${osLabel ?? "Unknown OS"} (${cpu.architecture ?? "Unknown CPU"})`,
    );
  }, []);

  return (
    <div>
      {" "}
      <p>Your system: {systemInfo}</p>
      <a href="https://polzon.itch.io/quintessence/download/w0CQSfXMkbPT6nRc28k_WK3ncEJ0GL03nixz5F6a">
        Direct Download
      </a>
    </div>
  );
}
