import Footer from "./components/Footer";

export default function HomeRemake() {
  return (
    <main>
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
          For a sneak peek of my upcoming game <i>Quintessence</i>, check out my
          secret <a href="https://polzon.itch.io/quintessence">itch.io page</a>.
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

      <Footer />
    </main>
  );
}
