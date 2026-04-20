"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const autoServices = [
  {
    id: 1,
    name: "To'liq Texnik Ko'rik",
    price: 200000,
    icon: "🛠️",
    image:
      "https://amaliyhayot.uz/_next/image?url=%2Fimages%2Ftransport%2Ftexnik-korik.jpg&w=3840&q=75",
    desc: "Professional diagnostika va barcha tizimlar nazorati",
  },
  {
    id: 2,
    name: "Moy Almashtirish",
    price: 150000,
    icon: "🛢️",
    image: "https://www.ustabor.uz/upload/images/gf_may_engine_oil.jpg",
    desc: "Sifatli moy va filtrlar bilan tezkor xizmat",
  },
  {
    id: 3,
    name: "Kompyuter Diagnostikasi",
    price: 100000,
    icon: "💻",
    image:
      "https://frankfurt.apollo.olxcdn.com/v1/files/m7ws7keti4vf-UZ/image;s=946x1345",
    desc: "Elektron tizimlardagi xatoliklarni aniqlash",
  },
  {
    id: 4,
    name: "Xodovoy Ta'mirlash",
    price: 300000,
    icon: "🔩",
    image:
      "https://img01.flagma.uz/photo/remont-hodovoy-chasti-1931792_big.jpg",
    desc: "Yurish qismini professional sozlash va ta'mirlash",
  },
  {
    id: 5,
    name: "Konditsioner To'ldirish",
    price: 180000,
    icon: "❄️",
    image:
      "https://img.ixbt.site/live/topics/preview/00/03/02/95/f423c9d2dd.webp",
    desc: "Freon quyish va iqlim nazorati tizimini tozalash",
  },
  {
    id: 6,
    name: "Premium Detailing",
    price: 500000,
    icon: "✨",
    image:
      "https://sydneypremiumdetailing.com.au/wp-content/uploads/2022/12/Sydney-Premium-Detailing-Paint-Protection-PPF-1633-1024x683.jpg",
    desc: "Kuzovni polirovka qilish va himoya qatlamini surtish",
  },
];

const availableTimes = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export default function AutoService() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);
  const [dates, setDates] = useState<any[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    const saved = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(saved);

    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push({
        full: d.toISOString().split("T")[0],
        day: d.getDate(),
        weekday: d
          .toLocaleDateString("uz-UZ", { weekday: "short" })
          .toUpperCase(),
      });
    }
    setDates(days);
    setSelectedDate(days[0].full);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTimeBooked = (time: string) =>
    bookings.some((b) => b.date === selectedDate && b.time === time);

  const handleFinalBook = () => {
    if (!selectedDate || !selectedTime) return;
    const newBooking = {
      id: Date.now(),
      service: selectedService.name,
      price: selectedService.price,
      date: selectedDate,
      time: selectedTime,
      type: "auto",
      icon: selectedService.icon,
    };
    localStorage.setItem("bookings", JSON.stringify([...bookings, newBooking]));
    router.push("/Bandlovlar");
  };

  const handleMenuClick = (item: string) => {
    if (item === "Xizmatlar") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedMenu(item);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "15px 40px" : "25px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: scrolled ? "rgba(5, 5, 5, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          borderBottom: scrolled ? "1px solid #222" : "none",
          transition: "all 0.4s",
        }}
      >
        <div
          onClick={() => router.push("/")}
          style={{
            fontSize: "24px",
            fontWeight: 900,
            cursor: "pointer",
            letterSpacing: "-1px",
          }}
        >
          LUXE <span style={{ color: "#3498db" }}>AUTO</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#999",
          }}
        >
          {["Xizmatlar", "Biz haqimizda", "Aloqa"].map((item) => (
            <motion.span
              key={item}
              onClick={() => handleMenuClick(item)}
              whileHover={{ color: "#3498db", y: -2 }}
              style={{ cursor: "pointer" }}
            >
              {item}
            </motion.span>
          ))}
        </div>
        <button
          onClick={() => router.push("/Bandlovlar")}
          style={{
            padding: "10px 20px",
            borderRadius: "12px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            fontWeight: 700,
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          BRONLARIM
        </button>
      </motion.nav>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "140px 20px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "clamp(35px, 7vw, 60px)",
              fontWeight: 900,
              marginBottom: "15px",
            }}
          >
            LUXE <span style={{ color: "#3498db" }}>AUTO</span>
          </h1>
          <p style={{ color: "#777", fontSize: "18px" }}>
            Sizning avtomobilingiz uchun premium xizmatlar
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {autoServices.map((s, index) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(s)}
              style={{
                background: "#0f0f0f",
                borderRadius: "35px",
                border: "1px solid #222",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <div
                style={{ width: "100%", height: "200px", position: "relative" }}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(10px)",
                    padding: "10px",
                    borderRadius: "15px",
                    fontSize: "24px",
                  }}
                >
                  {s.icon}
                </div>
              </div>
              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "25px",
                    height: "40px",
                  }}
                >
                  {s.desc}
                </p>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 900,
                    color: "#3498db",
                  }}
                >
                  {s.price.toLocaleString()} UZS
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {(selectedService || selectedMenu) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.95)",
              zIndex: 2000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              style={{
                background: "#0d0d0d",
                width: "100%",
                maxWidth: "500px",
                borderRadius: "45px",
                padding: "40px",
                border: "1px solid #222",
              }}
            >
              {selectedService ? (
                <>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      textAlign: "center",
                      marginBottom: "5px",
                    }}
                  >
                    {selectedService.name}
                  </h2>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#3498db",
                      fontWeight: 600,
                      marginBottom: "30px",
                    }}
                  >
                    {selectedService.price.toLocaleString()} UZS
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      overflowX: "auto",
                      paddingBottom: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {dates.map((d) => (
                      <div
                        key={d.full}
                        onClick={() => setSelectedDate(d.full)}
                        style={{
                          minWidth: "75px",
                          padding: "15px",
                          borderRadius: "20px",
                          textAlign: "center",
                          cursor: "pointer",
                          border:
                            selectedDate === d.full
                              ? "2px solid #3498db"
                              : "1px solid #1a1a1a",
                          background:
                            selectedDate === d.full
                              ? "rgba(52,152,219,0.1)"
                              : "#141414",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "10px",
                            color: selectedDate === d.full ? "#3498db" : "#555",
                          }}
                        >
                          {d.weekday}
                        </div>
                        <div style={{ fontSize: "20px", fontWeight: 900 }}>
                          {d.day}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    {availableTimes.map((t) => (
                      <button
                        key={t}
                        disabled={isTimeBooked(t)}
                        onClick={() => setSelectedTime(t)}
                        style={{
                          padding: "15px 0",
                          borderRadius: "15px",
                          border: "none",
                          backgroundColor:
                            selectedTime === t ? "#3498db" : "#181818",
                          color: isTimeBooked(t) ? "#333" : "#fff",
                          cursor: isTimeBooked(t) ? "not-allowed" : "pointer",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleFinalBook}
                    disabled={!selectedTime}
                    style={{
                      width: "100%",
                      padding: "20px",
                      borderRadius: "20px",
                      border: "none",
                      backgroundColor: "#3498db",
                      color: "#fff",
                      fontWeight: 900,
                      cursor: "pointer",
                      opacity: !selectedTime ? 0.3 : 1,
                    }}
                  >
                    TASDIQLASH
                  </button>
                </>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <h2
                    style={{
                      fontSize: "26px",
                      fontWeight: 800,
                      marginBottom: "20px",
                    }}
                  >
                    {selectedMenu}
                  </h2>
                  <p style={{ color: "#888" }}>
                    {selectedMenu === "Biz haqimizda"
                      ? "LUXE AUTO - eng sifatli xizmatlar markazi."
                      : "Aloqa: +998 (90) 123-45-67"}
                  </p>
                </div>
              )}

              <button
                onClick={() => {
                  setSelectedService(null);
                  setSelectedMenu(null);
                }}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  color: "#444",
                  marginTop: "25px",
                  cursor: "pointer",
                }}
              >
                YOPISH
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
