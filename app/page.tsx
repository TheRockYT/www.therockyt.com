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
        <br />
        <h2>Quick-Navigation</h2>
        <h3>
          <Link href="/portal">Portal</Link>
        </h3>
        <h3>
          <Link href="/projects">Projects</Link>
        </h3>
        <h3>
          <Link href="/link/?to=https://www.spigotmc.org/members/620754/">
            SpigotMC
          </Link>
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
