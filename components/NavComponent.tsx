"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function NavComponent() {
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
    ["Projects", "/projects"],
    ["Early Access", "/early-access"],
    ["GitHub", "/link?to=https://github.com/TheRockYT"],
  ];
  return (
    <nav className={isActive ? "enabled" : ""}>
      <Image
        src="/img/icons/menu_open.png"
        alt="X"
        id="nav_open"
        className={isActive ? "" : "enabled"}
        onClick={toggleMenu}
        height="40"
        width="40"
      />
      <Image
        src="/img/icons/menu_close.png"
        alt="X"
        id="nav_close"
        className={isActive ? "enabled" : ""}
        onClick={toggleMenu}
        height="40"
        width="40"
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
      <Image
        src="/img/therockyt.png"
        onClick={() => {
          router.push("/");
        }}
        height="40"
        width="40"
        alt={""}
      />
    </nav>
  );
}
