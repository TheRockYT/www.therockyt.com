export const metadata = {
  title: "Home - TheRockYT",
  description: "TheRockYT's Website",
};
import "@/style/home.css";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <h1>TheRockYT</h1>
        <h2>Top</h2>
        <h3>
          <Link href="/directbans">DirectBans</Link>
        </h3>
        <h3>
          <Link href="/sync">Sync</Link>
        </h3>
        <h3>
          <Link href="/fspawn">FSpawn</Link>
        </h3>
        <h3>
          <Link href="/advancedcloud">AdvancedCloud</Link>
        </h3>
        <h3>
          <Link href="/shutuppc">ShutUpPC</Link>
        </h3>
        <h3>
          <Link href="/link/?to=https://github.com/TheRockYT">GitHub</Link>
        </h3>
        <h3>
          <Link href="/link/?to=https://hub.docker.com/u/therockyt">
            Docker Hub
          </Link>
        </h3>
      </div>
    </div>
  );
}
