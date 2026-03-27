"use client";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Play", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];

export default function Header() {
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
        </nav>
        <p />
      </div>
      <hr />
    </header>
  );
}
