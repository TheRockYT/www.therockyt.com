"use client";

import "./../style/home.css";

import Link from "next/link";

export default function Page(req, res) {
  return (
    <div>
      <h1>Platform Race</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>
        This game is currently not in development and might be achived in the
        future.
      </h3>
      <br />
      <br />
      <h2>How to play?</h2>
      <p>
        Platform Race is a platform game developed by TheRockYT using Unreal
        Engine 5.
      </p>
      <br />
      <p>Your goal is to reach the finish line as fast as possible.</p>
      <p>Planned gamemodes:</p>
      <p>- Singleplayer</p>
      <p>- Multiplayer</p>
      <p>- Multiplayer (Random platforms)</p>
      <br />
      <br />
      <h2>Release date</h2>
      <p>There is currently no release date.</p>
      <br />
      <br />
      <h2>Download</h2>
      <p>This game is currently not in development.</p>
      <br />
      <br />
      <h2>Do you have any questions?</h2>
      <p>
        Please contact{" "}
        <Link href="mailto:mail@therockyt.com">mail@therockyt.com</Link>.
      </p>
    </div>
  );
}
