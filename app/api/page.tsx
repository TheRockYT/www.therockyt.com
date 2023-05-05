"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>API documentation</h1>
      <br />
      <br />
      <h2>Spigot/Bungeecord Plugins</h2>
      <br />
      <h3>List Plugins:</h3>
      <p>Request:</p>
      <p>
        <code>https://api.therockyt.com/pl/list/</code>
      </p>
      <h3>Get Version Info:</h3>
      <p>Request:</p>
      <p>
        <code>https://api.therockyt.com/pl/(name)/version/</code>
      </p>
      <h3>Get Plugin Download:</h3>
      <p>Request:</p>
      <p>
        <code>
          https://api.therockyt.com/pl/(name)/download/(version)-(platform).jar
        </code>
      </p>
    </div>
  );
}
