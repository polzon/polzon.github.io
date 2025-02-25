<script lang="ts">
  import Header from './header.svelte';
</script>

<Header />

<div>
  <p>
    <b>About Me:</b><br />
    This is my personal website hosted on Debian. This site shows off some
    things I'm working on, contact information, and some resources I want to
    share. It is frequently updated more as I work on various projects and learn
    more about web development.
  </p>
</div>
<p>
  For some of my work,
  <a href="https://github.com/polzon/">check out my GitHub.</a><br />
</p>
<p>
  <b>Resources:</b><br />
  I'm working on an unnamed game, check out a public web build
  <a href="https://shipp.dev/demo">here</a>.<br />
  You can check out some of my browser research on
  <a href="https://shipp.dev/fs.php">this page</a>.<br />
</p>
<p>
  <b>Contact:</b><br />
  Email: <a href="mailto:public@polson.dev">public@polson.dev</a>
  (<a href="https://shipp.dev/pubkey.txt">pgp</a>)<br />
  Bsky: <a href="https://bsky.app/profile/polson.dev">@polson.dev</a><br />
</p>
<div>
  <footer>
    <p><em>Thanks for visiting,<br />- Zack</em></p>
  </footer>
</div>
<body></body>

<style>
  * {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    /* font-family: Tahoma, Verdana, Arial, sans-serif; */
  }
  body {
    margin: 2em auto;
    max-width: 35em;
    width: auto;
    min-width: 10em;
    padding: 0 0;
    font-size: 14px;
    line-height: 1.42857143;
  }
  b {
    font-weight: bold;
  }
  @media (prefers-color-scheme: light) {
    body {
      color: #1f2328;
      background-color: white;
    }
    a:hover,
    a:active {
      color: red;
    }
    a:link,
    a:visited {
      color: darkred;
    }
    *::-moz-selection {
      color: white;
      background-color: darkred;
    }
  }
  @media (prefers-color-scheme: dark) {
    body {
      color:white;
      background-color: #1f2328;

    }
    a:hover, a:active {
      color: darkred;
    }
    a:link,
    a:visited {
      color: #cf462d;
    }
    *::-moz-selection {
      color: white;
      background-color: darkred;
    }
  }
  @media screen and (max-width: 40em) {
    body {
      width: auto;
      max-width: 100%;
      padding: 0 1em;
    }
  }

</style>
