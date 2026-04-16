"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

const serviceImages: { [key: string]: string } = {
  "Premium Soch Kesish":
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&auto=format&fit=crop",
  "Soqol Dizayni":
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=400&auto=format&fit=crop",
  "Luxe Combo":
    "https://png.pngtree.com/thumb_back/fh260/background/20251121/pngtree-barber-giving-a-fade-haircut-to-man-with-comb-and-scissors-image_20512969.webp",

  "Yuz Tozalash (Black Mask)":
    "https://fadeartist.ca/wp-content/uploads/2023/03/regular-hair-salon-visits-for-men.jpg",

  "Premium Soqol Olish":
    "https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg?w=360",

  "Bolalar soch turmagi":
    "https://png.pngtree.com/thumb_back/fh260/background/20251121/pngtree-barber-giving-a-client-haircut-with-clippers-in-stylish-barbershop-image_20512522.webp",
};

export default function Bookings() {
  const router = useRouter();
  const [myBookings, setMyBookings] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("luxe_bookings");
    if (saved) {
      setMyBookings(JSON.parse(saved));
    }
  }, []);

  const cancelBooking = (id: number) => {
    const updated = myBookings.filter((b) => b.id !== id);
    setMyBookings(updated);
    localStorage.setItem("luxe_bookings", JSON.stringify(updated));
  };

  return (
    <div
      style={{
        backgroundColor: "#050505",
        minHeight: "100vh",
        color: "#fff",
        padding: "120px 20px 40px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <header
        style={{ maxWidth: "800px", margin: "0 auto", marginBottom: "50px" }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            fontSize: "clamp(24px, 5vw, 32px)",
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          MENING <span style={{ color: "#C5A358" }}>BRONLARIM</span>
        </motion.h1>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {myBookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign: "center",
              padding: "80px 20px",
              backgroundColor: "#111",
              borderRadius: "30px",
              border: "1px dashed #333",
            }}
          >
            <p
              style={{ fontSize: "18px", color: "#888", marginBottom: "20px" }}
            >
              Hozircha hech qanday broningiz mavjud emas.
            </p>
            <button
              onClick={() => router.push("/Barber")}
              style={{
                color: "#C5A358",
                background: "none",
                border: "none",
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Xizmatlarni ko'rish
            </button>
          </motion.div>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            <AnimatePresence mode="popLayout">
              {myBookings.map((booking) => (
                <motion.div
                  key={booking.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: 50 }}
                  whileHover={{ borderColor: "rgba(197, 163, 88, 0.5)", y: -5 }}
                  style={{
                    backgroundColor: "#0c0c0c",
                    padding: "20px",
                    borderRadius: "28px",
                    border: "1px solid #1a1a1a",
                    display: "flex",
                    flexDirection: "row", // Qatordagi rasm va matn
                    gap: "20px",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "1px solid #222",
                    }}
                  >
                    <img
                      src={
                        serviceImages[booking.service] ||
                        "https://via.placeholder.com/100?text=Luxe"
                      }
                      alt={booking.service}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        marginBottom: "8px",
                        color: "#fff",
                      }}
                    >
                      {booking.service}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "12px",
                        color: "#888",
                        fontSize: "13px",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        📅 {format(new Date(booking.date), "dd.MM.yyyy")}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        ⏰ {booking.time}
                      </span>
                      <span style={{ color: "#C5A358", fontWeight: "700" }}>
                        💰 {booking.price} UZS
                      </span>
                    </div>
                  </div>

                  {/* BEKOR QILISH TUGMASI */}
                  <button
                    onClick={() => cancelBooking(booking.id)}
                    style={{
                      background: "rgba(255, 77, 77, 0.08)",
                      color: "#ff4d4d",
                      border: "none",
                      padding: "12px",
                      borderRadius: "15px",
                      cursor: "pointer",
                      fontSize: "11px",
                      fontWeight: "900",
                      transition: "0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#ff4d4d";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 77, 77, 0.08)";
                      e.currentTarget.style.color = "#ff4d4d";
                    }}
                  >
                    BEKOR QILISH
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ textAlign: "center", marginTop: "60px" }}
      >
        <button
          onClick={() => router.push("/Home")}
          style={{
            background: "none",
            border: "none",
            color: "#444",
            fontSize: "13px",
            cursor: "pointer",
            fontWeight: "600",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#C5A358")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#444")}
        >
          ← ASOSIY SAHIFAGA QAYTISH
        </button>
      </motion.div>
    </div>
  );
}
