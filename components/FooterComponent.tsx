"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavComponent() {
  const pathname = usePathname();

  const footer = [
    ["Home", "/"],
    ["Portal", "/portal"],
    ["Early Access", "/early-access"],
    ["API", "/api"],
    ["Terms and Conditions", "/terms"],
    ["Privacy Policy", "/privacypolicy"],
    ["Contact", "/contact"],
    ["GitHub", "/link?to=https://github.com/TheRockYT"],
  ];
  return (
    <footer>
      <ul>
        {footer.map((item) => (
          <li key={item[0]}>
            <Link
              href={item[1]}
              passHref
              className={pathname === item[1] ? "active" : ""}
            >
              {item[0]}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
