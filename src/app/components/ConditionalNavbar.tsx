"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar"
import AutoNavbar from "./Navbar"; 

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/autoservice")) {
    return <AutoNavbar />;
  }

  if (pathname === "/" || pathname === "/Home") {
    return null;
  }
  return <Navbar />;
}
