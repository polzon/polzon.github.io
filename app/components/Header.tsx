import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Play", href: "/game" },
  {
    label: "itch.io",
    href: "https://polzon.itch.io/quintessence",
    external: true,
  },
];

export default function Header() {
  return (
    <header>
      <div className="site-header">
        <h1>
          <b>Zack Polson</b>
        </h1>
        <nav>
          {NAV_LINKS.map((link, i) => (
            <span key={link.label}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
              {i < NAV_LINKS.length - 1 && " | "}
            </span>
          ))}
        </nav>
        <p />
      </div>
    </header>
  );
}
