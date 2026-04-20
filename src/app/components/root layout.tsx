import "./globals.css";
import ConditionalNavbar from "./ConditionalNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  );
}
