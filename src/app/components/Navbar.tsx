"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();


  if (pathname === "/" || pathname === "/Home") {
    return null;
  }

  const navItems = [
    { name: "XIZMATLAR", path: "/Barber" },
    { name: "BRONLARIM", path: "/bookings" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: "20px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        maxWidth: "1100px",
        zIndex: 2000,
        backgroundColor: "rgba(10, 10, 10, 0.8)", 
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        padding: "12px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "24px",
        border: "1px solid rgba(197, 163, 88, 0.3)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
      }}
    >
      <motion.div
        onClick={() => router.push("/Home")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          fontSize: "20px",
          fontWeight: 900,
          cursor: "pointer",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          letterSpacing: "1px",
        }}
      >
        <div
          style={{
            width: "35px",
            height: "35px",
            background: "linear-gradient(135deg, #C5A358 0%, #8E6E2E 100%)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          L
        </div>
        <span style={{ display: "flex", gap: "5px" }}>
          LUXE <span style={{ color: "#C5A358" }}>CUTS</span>
        </span>
      </motion.div>

      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              style={{
                position: "relative",
                color: isActive ? "#C5A358" : "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
                padding: "10px 18px",
                transition: "all 0.3s ease",
                letterSpacing: "0.5px",
              }}
            >
              {item.name}

              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: "20%",
                    right: "20%",
                    height: "2px",
                    background: "#C5A358",
                    borderRadius: "2px",
                    boxShadow: "0 0 10px rgba(197, 163, 88, 0.8)",
                  }}
                />
              )}
            </button>
          );
        })}

        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#C5A358",
            color: "#000",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/Barber")}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "14px",
            border: "1px solid #C5A358",
            backgroundColor: "transparent",
            color: "#C5A358",
            fontSize: "12px",
            fontWeight: "900",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          BRON QILISH
        </motion.button>
      </div>
    </motion.nav>
  );
}
