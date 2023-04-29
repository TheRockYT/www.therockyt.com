"use client";

import { useRouter, usePathname } from "next/navigation"; //router navigation

import "./style/general.css";
import "./style/navigation.css";
import "./style/site.css";

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <html>
      <head>
        <title>TheRockYT</title>
      </head>
      <body>
        <nav>
          <img
            src="/img/icons/menu_open.png"
            alt="X"
            id="nav_open"
            className="enabled"
          />
          <img src="/img/icons/menu_close.png" alt="X" id="nav_close" />
          <ul id="nav_list">
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
                  router.push("/directbans");
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
                }}
                className={pathname === "/shutuppc" ? "active" : ""}
              >
                ShutUpPC
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  router.push("https://github.com/therockyt");
                }}
                className={
                  pathname === "https://github.com/therockyt" ? "active" : ""
                }
              >
                GitHub
              </p>
            </li>
          </ul>
          <img
            src="/img/therockyt.png"
            alt=""
            id="nav_logo"
            onClick="window.location.href = '/'"
          />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
