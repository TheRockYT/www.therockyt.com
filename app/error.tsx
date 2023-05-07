"use client";
import Link from "next/link";

export const metadata = {
  title: "Error - TheRockYT",
};

export default function Error({ statusCode }: any) {
  return (
    <div>
      <h1>Sorry</h1>
      <h2>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
        <Link href="/">Go back home</Link>
      </h2>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
