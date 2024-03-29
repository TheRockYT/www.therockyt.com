"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export function RedirectLink() {
  const router = useRouter();
  const searchParams = useSearchParams();
  if (searchParams != null) {
    var to_ = searchParams.get("to");
    if (to_ != null && to_.startsWith("https://")) {
      const to = to_;

      return (
        <div>
          <h1>External Link</h1>
          <br />
          <br />
          <br />
          <h2>Do you want to leave www.therockyt.com?</h2>
          <br />
          <br />
          <br />
          <br />
          <p>
            <a
              target="_blank"
              href={to}
              rel="noopener noreferrer"
              onClick={() => router.back()}
            >
              Click here to redirect.
            </a>
          </p>
          <br />
          <br />
          <br />
          <br />
          <p>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.back();
              }}
            >
              Click here to go back to the last site.
            </Link>
          </p>
          <br />
          <p>
            <Link href="/">Click here to go home.</Link>
          </p>
          <br />
          <br />
          <br />
          <br />
          <h3>Link:</h3>
          <p>{to}</p>
          <br />
          <br />
          <br />
          <br />
          <p>
            TheRockYT has not reviewed all of the sites linked to its Website
            and is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by TheRockYT of the
            site. The use of any linked website is at the user’s own risk.
          </p>
          <br />
          <br />
          <p>Please read our Privacy Policy for more information.</p>
        </div>
      );
    }
  }
  return (
    <div>
      <h1>External Link</h1>
      <br />
      <br />
      <br />
      <h2>Waiting...</h2>
      <br />
      <br />
      <p>
        <Link href="#" onClick={() => router.back()}>
          Click here to go back to the last site.
        </Link>
      </p>
      <br />
      <br />
      <p>
        <Link href="/">Click here to go home.</Link>
      </p>
    </div>
  );
}
