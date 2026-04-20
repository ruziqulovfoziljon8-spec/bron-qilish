"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Bandlovlar() {
  const [bookings, setBookings] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);
  }, []);

  const deleteBooking = (id: number) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        padding: "80px 20px",
        fontFamily: "'Inter', sans-serif",
        position: "relative", 
      }}
    >
      <button
        onClick={() => router.back()}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          borderRadius: "12px",
          border: "1px solid #333",
          backgroundColor: "#111",
          color: "#fff",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3498db")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333")}
      >
        ← Orqaga
      </button>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1
            style={{ fontSize: "40px", fontWeight: 900, letterSpacing: "-1px" }}
          >
            MY <span style={{ color: "#3498db" }}>BOOKINGS</span>
          </h1>
          <p style={{ color: "#666", marginTop: "10px" }}>
            Barcha faol bronlaringiz ro'yxati
          </p>
        </header>

        {bookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: "center", padding: "100px 0" }}
          >
            <div style={{ fontSize: "60px", marginBottom: "20px" }}>📂</div>
            <p style={{ color: "#444", fontSize: "18px" }}>
              Hozircha hech qanday bron mavjud emas.
            </p>
            <button
              onClick={() => router.push("/")}
              style={{
                marginTop: "20px",
                padding: "12px 30px",
                borderRadius: "12px",
                border: "1px solid #333",
                backgroundColor: "transparent",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Asosiy sahifaga qaytish
            </button>
          </motion.div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <AnimatePresence>
              {bookings.map((booking) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    backgroundColor: "#111",
                    padding: "25px",
                    borderRadius: "24px",
                    border: `1px solid ${
                      booking.type === "auto" ? "#3498db" : "#C5A358"
                    }`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "6px",
                      backgroundColor:
                        booking.type === "auto" ? "#3498db" : "#C5A358",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div style={{ fontSize: "40px" }}>
                      {booking.icon || (booking.type === "auto" ? "🚗" : "✂️")}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 800,
                          margin: "0 0 5px 0",
                        }}
                      >
                        {booking.service}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          fontSize: "14px",
                          color: "#888",
                        }}
                      >
                        <span>📅 {booking.date}</span>
                        <span>⏰ {booking.time}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: 900,
                          color:
                            booking.type === "auto" ? "#3498db" : "#C5A358",
                          margin: 0,
                        }}
                      >
                        {booking.price?.toLocaleString()} UZS
                      </p>
                      <span
                        style={{
                          fontSize: "10px",
                          color: "#444",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {booking.type === "auto"
                          ? "Auto Service"
                          : "Luxe Barber"}
                      </span>
                    </div>

                    <button
                      onClick={() => deleteBooking(booking.id)}
                      style={{
                        background: "rgba(255, 0, 0, 0.1)",
                        color: "#ff4d4d",
                        border: "none",
                        padding: "10px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        transition: "0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255, 0, 0, 0.2)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255, 0, 0, 0.1)")
                      }
                    >
                      Bekor qilish
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
