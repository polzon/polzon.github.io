import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header_layout";

const SITE_URL = "https://zack.polson.dev";
const isDev = process.env.NODE_ENV !== "production";
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-src 'self' https://itch.io https://*.itch.io",
  "frame-ancestors 'none'",
  "object-src 'none'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "manifest-src 'self'",
  "worker-src 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Zack Polson",
      url: `${SITE_URL}/`,
      sameAs: [
        "https://github.com/polzon/",
        "https://bsky.app/profile/polson.dev",
      ],
      email: "mailto:zack@polson.dev",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Zack Polson",
      description: "Personal website of Zack Polson.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

const structuredDataJson = JSON.stringify(structuredData);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zack Polson",
    template: "%s | Zack Polson",
  },
  description: "Personal website of Zack Polson.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Zack Polson",
    description: "Personal website of Zack Polson.",
    siteName: "Zack Polson",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={CONTENT_SECURITY_POLICY}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
        <meta name="darkreader-lock" />
      </head>
      <body>
        <section className="page-shell">
          <Header />
          {children}
        </section>
      </body>
    </html>
  );
}
