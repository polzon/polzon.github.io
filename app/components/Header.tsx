"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Play", href: "/" },
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
];

export default function Header() {
    // Dark mode follows system preference; toggle just logs for now
    const [darkMode, setDarkMode] = useState(() =>
        typeof window !== "undefined"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : false
    );

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const handleToggleDarkMode = () => {
        // In a full implementation you'd toggle a theme class on <html>
        setDarkMode((prev) => !prev);
        console.log("Toggle dark mode — implement theme switching as needed");
    };

    return (
        <header>
            <div style={{ textAlign: "center" }}>
                <h1>
                    <b>Zack Polson</b>
                </h1>
                <nav>
                    {NAV_LINKS.map((link, i) => (
                        <span key={link.label}>
                            <a href={link.href}>{link.label}</a>
                            {i < NAV_LINKS.length - 1 && " | "}
                        </span>
                    ))}
                    {" | "}
                    <button
                        onClick={handleToggleDarkMode}
                        aria-label="Toggle dark mode"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "inherit",
                            font: "inherit",
                        }}
                    >
                        Toggle Dark Mode
                    </button>
                </nav>
                <p />
            </div>
            <hr />
        </header>
    );
}
