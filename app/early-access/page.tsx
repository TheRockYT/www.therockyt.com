import Link from "next/link";

export const metadata = {
  title: "Early Access - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>Early Access</h1>
      <br />
      <br />
      <h2>What is Early Access?</h2>
      <p>
        Early Access is a program to get the latest development versions of the
        projects by TheRockYT.
      </p>
      <br />
      <br />
      <h2>Why Early Access?</h2>
      <p>
        The Early Access program is there to get feedback from users and to test
        the projects.
      </p>

      <br />
      <br />
      <h2>How to get Early Access?</h2>
      <p>
        Currently, you can get Early Access by{" "}
        <Link href="/contact">contacting</Link> me.
      </p>
      <p>
        Later, the Early Access program will be accessible trough the{" "}
        <Link href="/portal">Portal</Link>
      </p>
    </div>
  );
}
