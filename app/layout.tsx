import "@/style/general.css";
import "@/style/navigation.css";
import "@/style/site.css";
import "@/components/NavComponent";

import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";
import Script from "next/script";

export const metadata = {
  title: "TheRockYT",
  description: "TheRockYT's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="apple-touch-icon" href="/img/therockyt.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TheRockYT" />
        <meta name="description" content="TheRockYT's Website" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="TheRockYT" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/img/therockyt.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
        <Script src="/app.js"></Script>
      </head>
      <body>
        <NavComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
