import Link from "next/link";

export const metadata = {
  title: "Projects - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>Projects</h1>
      <br />
      <br />
      <h2>Early Access</h2>
      <p>
        Learn More: <Link href="/early-access">Early Access</Link>
      </p>
      <br />
      <br />
      <h2>Maintained Spigot/Bungee Projects</h2>
      <p>
        {"- "}
        <Link href="/directbans">DirectBans</Link>
      </p>
      <p>
        {"- "}
        <Link href="/sync">Sync</Link>
      </p>
      <p>
        {"- "}
        <Link href="/fspawn">FSpawn</Link>
      </p>
      <p>
        {"- "}
        <Link href="/advancedfind">AdvancedFind</Link>
      </p>
      <p>
        {"- "}
        <Link href="/commandserverconnect">CommandServerConnect</Link>
      </p>
      <p>
        {"- "}
        <Link href="/cmotd">CMOTD</Link>
      </p>
      <p>
        {"- "}
        <Link href="/damagereducer">Damage Reducer</Link>
      </p>
      <br />
      <br />
      <h2>Other Projects</h2>
      <p>
        {"- "}
        <Link href="/link?to=https://aspectratio.therockyt.com">
          Aspect-Ratio-Calculator
        </Link>
      </p>
      <p>
        {"- "}
        <Link href="/shutuppc">ShutUpPC</Link>
      </p>
    </div>
  );
}
