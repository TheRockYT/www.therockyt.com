import Link from "next/link";

export default function NotFoundCatchAll() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </div>
  );
}
