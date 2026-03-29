import Link from "next/link";
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
          <Link href="https://github.com/polzon/">check out my GitHub</Link>.
        </p>
        <p>
          You can try an early preview of my upcoming game <i>Quintessence</i>{" "}
          <Link href="/game/play">in your browser</Link>.
        </p>
      </div>

      <div>
        <p>
          <b>Contact:</b>
          <br />
          Email: <Link href="mailto:zack@polson.dev">zack@polson.dev</Link>
          <br />
          Bsky:{" "}
          <Link href="https://bsky.app/profile/polson.dev">@polson.dev</Link>
          <br />
        </p>
      </div>

      <Footer />
    </main>
  );
}
