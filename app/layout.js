"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import "./style/general.css";
import "./style/navigation.css";
import "./style/site.css";

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive(!isActive);
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
                  router.push("/");
                  toggleMenu();
                }}
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/directbans");
                  toggleMenu();
                }}
                className={pathname === "/directbans" ? "active" : ""}
              >
                DirectBans
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/sync");
                  toggleMenu();
                }}
                className={pathname === "/sync" ? "active" : ""}
              >
                Sync
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/fspawn");
                  toggleMenu();
                }}
                className={pathname === "/fspawn" ? "active" : ""}
              >
                FSpawn
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/advancedcloud");
                  toggleMenu();
                }}
                className={pathname === "/advancedcloud" ? "active" : ""}
              >
                Cloud
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/shutuppc");
                  toggleMenu();
                }}
                className={pathname === "/shutuppc" ? "active" : ""}
              >
                ShutUpPC
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("/link?to=https://github.com/TheRockYT");
                  toggleMenu();
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
