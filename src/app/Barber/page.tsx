"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { format, addDays, startOfToday, isSameDay } from "date-fns";

const services = [
  {
    id: 1,
    name: "Premium Soch Kesish",
    price: "120,000",
    desc: "Sizning yuz tuzilishingizga mos uslub va professional yondashuv",
    imageUrl:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Soqol Dizayni",
    price: "60,000",
    desc: "Issiq sochiq, xavfli ustara va maxsus moylar bilan ishlov berish",
    imageUrl:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Luxe Combo",
    price: "160,000",
    desc: "Soch va soqol, yuz parvarishi va massajni o'z ichiga olgan to'liq paket",
    imageUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20251121/pngtree-barber-giving-a-fade-haircut-to-man-with-comb-and-scissors-image_20512969.webp",
  },
  {
    id: 4,
    name: "Yuz Tozalash (Black Mask)",
    price: "50,000",
    desc: "Yuz teringizni chuqur tozalash va vitaminlar bilan boyitish",
    imageUrl:
      "https://fadeartist.ca/wp-content/uploads/2023/03/regular-hair-salon-visits-for-men.jpg",
  },
  {
    id: 5,
    name: "Premium Soqol Olish",
    price: "80,000",
    desc: "Klassik uslubda silliq soqol olish va yuz parvarishi",
    imageUrl:
      "https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg?w=360",
  },
  {
    id: 6,
    name: "Bolalar soch turmagi",
    price: "70,000",
    desc: "Kichik mehmonlarimiz uchun zamonaviy va quvnoq uslublar",
    imageUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20251121/pngtree-barber-giving-a-client-haircut-with-clippers-in-stylish-barbershop-image_20512522.webp",
  },
];

const timeSlots = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Barber() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState(startOfToday());
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("luxe_bookings");
    if (saved) setBookedSlots(JSON.parse(saved));
  }, []);

  const isTimeBooked = (time: string) => {
    return bookedSlots.some(
      (b) => b.time === time && isSameDay(new Date(b.date), selectedDate)
    );
  };

  const handleFinalBook = () => {
    if (!selectedTime) return alert("Vaqtni tanlang!");
    const newBooking = {
      id: Date.now(),
      service: selectedService.name,
      date: selectedDate.toISOString(),
      time: selectedTime,
      price: selectedService.price,
    };
    const updatedBookings = [...bookedSlots, newBooking];
    localStorage.setItem("luxe_bookings", JSON.stringify(updatedBookings));
    alert("Muvaffaqiyatli bron qilindi!");
    router.push("/bookings");
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
      <main style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            XIZMATNI <span style={{ color: "#C5A358" }}>TANLANG</span>
          </h1>
          <p style={{ color: "#888", marginTop: "10px", fontSize: "18px" }}>
            Luxe Cuts premium xizmatlari bilan o'z uslubingizni yarating
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(197, 163, 88, 0.25)",
                borderColor: "#C5A358",
              }}
              onClick={() => setSelectedService(service)}
              style={{
                borderRadius: "32px",
                backgroundColor: "#0c0c0c",
                border: "1px solid #1a1a1a",
                cursor: "pointer",
                transition: "all 0.4s ease",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "240px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#151515",
                }}
              >
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.style.background =
                      "linear-gradient(45deg, #111, #1a1a1a)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "linear-gradient(to top, #0c0c0c, transparent)",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "30px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    color: "#aaa",
                    marginBottom: "30px",
                    lineHeight: "1.6",
                    fontSize: "15px",
                    flexGrow: 1,
                  }}
                >
                  {service.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #1a1a1a",
                    paddingTop: "20px",
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      color: "#C5A358",
                    }}
                  >
                    {service.price}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    UZS
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(12px)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              style={{
                backgroundColor: "#0a0a0a",
                width: "100%",
                maxWidth: "550px",
                borderRadius: "40px",
                padding: "40px",
                border: "1px solid rgba(197, 163, 88, 0.4)",
                position: "relative",
              }}
            >
              <button
                onClick={() => {
                  setSelectedService(null);
                  setSelectedTime("");
                }}
                style={{
                  position: "absolute",
                  top: "25px",
                  right: "25px",
                  background: "#1a1a1a",
                  border: "none",
                  color: "#fff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    objectFit: "cover",
                    border: "2px solid #C5A358",
                  }}
                />
                <div>
                  <h2 style={{ fontSize: "28px", fontWeight: 900 }}>
                    {selectedService.name}
                  </h2>
                  <p style={{ color: "#C5A358", fontWeight: "700" }}>
                    {selectedService.price} UZS
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "25px",
                  overflowX: "auto",
                  paddingBottom: "10px",
                }}
              >
                {[0, 1, 2, 3, 4, 5, 6].map((day) => {
                  const date = addDays(startOfToday(), day);
                  const isSelected = isSameDay(date, selectedDate);
                  return (
                    <button
                      key={day}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime("");
                      }}
                      style={{
                        padding: "15px",
                        minWidth: "90px",
                        borderRadius: "20px",
                        border: isSelected
                          ? "2px solid #C5A358"
                          : "1px solid #222",
                        backgroundColor: isSelected
                          ? "rgba(197, 163, 88, 0.1)"
                          : "#111",
                        color: isSelected ? "#C5A358" : "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          textTransform: "uppercase",
                          opacity: 0.6,
                        }}
                      >
                        {format(date, "EEE")}
                      </div>
                      <div style={{ fontSize: "22px", fontWeight: "bold" }}>
                        {format(date, "dd")}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                  marginBottom: "30px",
                }}
              >
                {timeSlots.map((time) => {
                  const isBooked = isTimeBooked(time);
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      disabled={isBooked}
                      onClick={() => setSelectedTime(time)}
                      style={{
                        padding: "14px",
                        borderRadius: "15px",
                        border: "none",
                        backgroundColor: isBooked
                          ? "#151515"
                          : isSelected
                          ? "#C5A358"
                          : "#222",
                        color: isBooked ? "#333" : isSelected ? "#000" : "#fff",
                        cursor: isBooked ? "not-allowed" : "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleFinalBook}
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "#C5A358",
                  color: "#000",
                  border: "none",
                  fontWeight: "900",
                  fontSize: "17px",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(197, 163, 88, 0.3)",
                }}
              >
                TASDIQLASH
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
