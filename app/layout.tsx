import "@/style/general.css";
import "@/style/navigation.css";
import "@/style/site.css";

import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <NavComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
