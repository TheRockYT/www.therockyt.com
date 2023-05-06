import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Contact</h1>
      <br />
      <br />
      <h2>Contact using mail:</h2>
      <p>
        <Link href="mailto:mail@therockyt.com">mail@therockyt.com</Link>
      </p>
    </div>
  );
}
