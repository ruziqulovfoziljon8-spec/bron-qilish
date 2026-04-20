"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar2 = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("Bosildi!"); 
    setIsModalOpen(true);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999, 
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <div
          style={{ color: "#fff", cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          LUXE AUTO
        </div>

        <div style={{ display: "flex", gap: "20px", color: "#fff" }}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/services")}
          >
            Xizmatlar
          </span>
          <span
            style={{ cursor: "pointer", color: "lightblue" }}
            onClick={handleOpenModal}
          >
            Aloqa
          </span>
        </div>
      </nav>

      <AnimatePresence>
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999, 
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.8)",
              }}
            />

            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                borderRadius: "20px",
                zIndex: 10000,
                color: "#000",
                position: "relative",
              }}
            >
              <h2>Bog'lanish</h2>
              <p>Telefon: +998 90 123 45 67</p>
              <button onClick={() => setIsModalOpen(false)}>Yopish</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
