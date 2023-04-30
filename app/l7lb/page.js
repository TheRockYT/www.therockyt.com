"use client";

import "./../style/home.css";

import Link from "next/link";

export default function Page(req, res) {
  return (
    <div>
      <h1>L7LB</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>
        You need to have Java installed. Tested Java version:
        <a href="/link/?to=https://www.azul.com/downloads/?version=java-8-lts&os=windows&architecture=x86-64-bit&package=jdk">
          Azul Zulu 8.64.0.19 x86
        </a>
      </h3>
      <br />
      <br />
      <h2>
        This tool is currently not in development and might be achived in the
        future.
      </h2>
      <br />
      <br />
      <h2>What is L7LB?</h2>
      <p>L7LB is a simple Java-basd L7 Loadbalancer.</p>
      <br />
      <br />
      <h2>How to setup L7LB</h2>
      <p>1. Install Java</p>
      <p>2. Download the latest version</p>
      <p>3. Place it into an empty directory</p>
      <p>4. Run the program</p>
      <p>5. Startup a Webbrower and go to ServerIp:8080 (default)</p>
      <p>6. Follow steps displayed on the page</p>
      <br />
      <br />
      <h2>Download</h2>
      <p>This tool is currently not in development</p>
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
