"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import "./style/general.css";
import "./style/navigation.css";
import "./style/site.css";

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
            <li>
              <p
                onClick={() => {
                  pushToSite("/");
                }}
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  pushToSite("/directbans");
                }}
                className={pathname === "/directbans" ? "active" : ""}
              >
                DirectBans
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  pushToSite("/sync");
                }}
                className={pathname === "/sync" ? "active" : ""}
              >
                Sync
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  pushToSite("/fspawn");
                }}
                className={pathname === "/fspawn" ? "active" : ""}
              >
                FSpawn
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  pushToSite("/advancedcloud");
                }}
                className={pathname === "/advancedcloud" ? "active" : ""}
              >
                Cloud
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  pushToSite("/shutuppc");
                }}
                className={pathname === "/shutuppc" ? "active" : ""}
              >
                ShutUpPC
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  pushToSite("/link?to=https://github.com/TheRockYT");
                }}
              >
                GitHub
              </p>
            </li>
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
            <li>
              <p
                onClick={() => {
                  router.push("/");
                }}
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/api");
                }}
                className={pathname === "/api" ? "active" : ""}
              >
                API
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/terms");
                }}
                className={pathname === "/terms" ? "active" : ""}
              >
                Terms and Conditions
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/privacypolicy");
                }}
                className={pathname === "/privacypolicy" ? "active" : ""}
              >
                Privacy Policy
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("https://github.com/TheRockYT");
                }}
                className={
                  pathname === "https://github.com/TheRockYT" ? "active" : ""
                }
              >
                Contact
              </p>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
