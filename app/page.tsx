const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://zack.polson.dev/#person",
      name: "Zack Polson",
      url: "https://zack.polson.dev/",
      sameAs: [
        "https://github.com/polzon/",
        "https://bsky.app/profile/polson.dev",
      ],
      email: "mailto:zack@polson.dev",
    },
    {
      "@type": "WebSite",
      "@id": "https://zack.polson.dev/#website",
      url: "https://zack.polson.dev/",
      name: "Zack Polson",
      description: "Personal website of Zack Polson.",
      publisher: {
        "@id": "https://zack.polson.dev/#person",
      },
    },
  ],
};

export default function HomeRemake() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div>
        <p>
          <b>About Me:</b>
          <br />
          This is my personal website hosted on Github Pages using React. This
          site shows off some things I&apos;m working on, contact information,
          and some resources I want to share. It is frequently updated more as I
          work on various projects and learn more about web development.
        </p>
      </div>

      <div>
        <p>
          For some of my work,{" "}
          <a href="https://github.com/polzon/">check out my GitHub</a>.
          <br />
        </p>
      </div>

      <div>
        <p>
          <b>Contact:</b>
          <br />
          Email: <a href="mailto:zack@polson.dev">zack@polson.dev</a>
          <br />
          Bsky: <a href="https://bsky.app/profile/polson.dev">@polson.dev</a>
          <br />
        </p>
      </div>
    </main>
  );
}
