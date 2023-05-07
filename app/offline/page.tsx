export const metadata = {
  title: "Offline - TheRockYT",
  description: "TheRockYT's Website",
};
import "@/style/home.css";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Offline</h1>
      <br />
      <p>
        You can't access this site becurse the server can't be reached. Try
        again later.
      </p>
      <br />
      <br />
      <h2>
        <Link href={"/"}>Try Again</Link>
      </h2>
    </div>
  );
}
