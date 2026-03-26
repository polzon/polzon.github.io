import "clsx";
function Header($$renderer) {
  $$renderer.push(`<header><div style="text-align: center;"><h1><b>Zack Polson</b></h1> <a href="./">Home</a> | <a href="./">Blog</a> | <a href="./">Play</a> | <a href="./">About</a> | <a href="./">Contact</a> | <a href="./">Toggle Dark Mode</a> <p></p></div> <hr/></header>`);
}
function _page($$renderer) {
  Header($$renderer);
  $$renderer.push(`<!----> <div><p><b>About Me:</b><br/> This is my personal website hosted on Github Pages using Svelte.
      This site shows off some things I'm working on, contact information,
      and some resources I want to share. It is frequently updated more as
      I work on various projects and learn more about web development.</p> <p>Currently overhauling this website to show-off my new projects, and as
      I learn how to properly use Svelte. More of my game progress to come soon!</p></div> <p>For some of my work, <a href="https://github.com/polzon/">check out my GitHub</a>.<br/></p> <p><b>Contact:</b><br/> Email: <a href="mailto:zack@polson.dev">zack@polson.dev</a> Bsky: <a href="https://bsky.app/profile/polson.dev">@polson.dev</a><br/></p> <div><footer><p><em>Thanks for visiting,<br/>- Zack Polson</em></p></footer></div>`);
}
export {
  _page as default
};
