"use client";

import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import "@/style/general.css";
import "@/style/navigation.css";
import "@/style/site.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive(!isActive);
  }
  function setMenu(active: boolean) {
    setIsActive(active);
  }
  async function pushToSite(site: string) {
    router.push(site);
    setMenu(false);
  }
  const navigation = [
    ["Home", "/"],
    ["DirectBans", "/directbans"],
    ["Sync", "/sync"],
    ["FSpawn", "/fspawn"],
    ["Cloud", "/advancedcloud"],
    ["ShutUpPC", "/shutuppc"],
    ["GitHub", "/link?to=https://github.com/TheRockYT"],
  ];
  const footer = [
    ["Home", "/"],
    ["API", "/api"],
    ["Terms and Conditions", "/terms"],
    ["Privacy Policy", "/privacypolicy"],
    ["Contact", "contact"],
    ["GitHub", "/link?to=https://github.com/TheRockYT"],
  ];
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/img/therockyt.png"
          type="image/x-icon"
        />
        <title>TheRockYT</title>
      </head>
      <body>
        <nav className={isActive ? "enabled" : ""}>
          <img
            src="/img/icons/menu_open.png"
            alt="X"
            id="nav_open"
            className={isActive ? "" : "enabled"}
            onClick={toggleMenu}
          />
          <img
            src="/img/icons/menu_close.png"
            alt="X"
            id="nav_close"
            className={isActive ? "enabled" : ""}
            onClick={toggleMenu}
          />
          <ul id="nav_list" className={isActive ? "enabled" : ""}>
            {navigation.map((item) => (
              <li key={item[0]}>
                <Link
                  href={item[1]}
                  passHref
                  onClick={() => {
                    setMenu(false);
                  }}
                  className={pathname === item[1] ? "active" : ""}
                >
                  {item[0]}
                </Link>
              </li>
            ))}
          </ul>
          <img
            src="/img/therockyt.png"
            onClick={() => {
              router.push("/");
            }}
          />
        </nav>
        <main>{children}</main>
        <footer>
          <ul>
            {footer.map((item) => (
              <li key={item[0]}>
                <Link
                  href={item[1]}
                  passHref
                  onClick={() => {
                    setMenu(false);
                  }}
                  className={pathname === item[1] ? "active" : ""}
                >
                  {item[0]}
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </body>
    </html>
  );
}
