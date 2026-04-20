"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Navbar2 } from "./Navbar2/page";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAutoPage = pathname.includes("/autoservice");
  const isBarberPage = pathname.includes("/Barber"); 
  return (
    <html lang="uz">
      <body>
        {isAutoPage && <Navbar2 />}

        {isBarberPage && <Navbar />}



        <main>{children}</main>
      </body>
    </html>
  );
}
