import Link from "next/link";

export const metadata = {
  title: "Damage Reducer - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>Damage Reducer</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>You need to have Java 8 or newer installed.</h3>
      <br />
      <br />
      <h2>Not Implemented</h2>
      <p>
        Learn More:{" "}
        <Link href="/link?to=https://github.com/TheRockYT/DamageReducer">
          https://github.com/TheRockYT/DamageReducer
        </Link>
      </p>
    </div>
  );
}
