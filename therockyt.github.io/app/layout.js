import "./globals.css";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
