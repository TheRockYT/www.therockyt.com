import Link from "next/link";

export const metadata = {
  title: "CommandServerConnect - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>CommandServerConnect</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>You need to have Java 8 or newer installed.</h3>
      <br />
      <br />
      <h2>Not Implemented</h2>
      <p>
        Learn More:{" "}
        <Link href="/link?to=https://github.com/TheRockYT/CommandServerConnect">
          https://github.com/TheRockYT/CommandServerConnect
        </Link>
      </p>
    </div>
  );
}
