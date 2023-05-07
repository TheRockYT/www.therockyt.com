import "@/style/general.css";
import "@/style/navigation.css";
import "@/style/site.css";

import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";

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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/img/therockyt.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/img/therockyt.png" />
        <meta name="theme-color" content="#fff" />
      </head>
      <body>
        <NavComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
