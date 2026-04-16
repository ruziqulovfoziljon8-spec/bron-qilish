"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import barber from "../imagess/barber..png";

export default function Home() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleBooking = () => {
    router.push("/Barber");
  };
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${barber.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(2px)",
          }}
        />
      </div>

      <header
        style={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            padding: "8px 24px 8px 8px",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(to bottom right, #222, #000)",
              border: "1px solid rgba(197, 163, 88, 0.3)",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 15C10 13 6 12 2 14C2 14 3 10 7 9C11 8 12 10 12 10C12 10 13 8 17 9C21 10 22 14 22 14C18 12 14 13 12 15Z"
                fill="#C5A358"
              />
              <circle cx="8" cy="18" r="2" stroke="#C5A358" strokeWidth="1.5" />
              <circle
                cx="16"
                cy="18"
                r="2"
                stroke="#C5A358"
                strokeWidth="1.5"
              />
              <path
                d="M9.5 16.5L16 7"
                stroke="#C5A358"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14.5 16.5L8 7"
                stroke="#C5A358"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 900,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                }}
              >
                Luxe
              </span>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 900,
                  color: "#C5A358",
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                }}
              >
                Cuts
              </span>
            </div>
            <span
              style={{
                fontSize: "9px",
                color: "#9ca3af",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.4em",
                marginTop: "4px",
              }}
            >
              Premium Barber
            </span>
          </div>
        </div>
      </header>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "4px 16px",
            borderRadius: "9999px",
            border: "1px solid rgba(197, 163, 88, 0.3)",
            backgroundColor: "rgba(197, 163, 88, 0.05)",
            color: "#C5A358",
            fontSize: "10px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "24px",
          }}
        >
          Sifat va an'ana uyg'unligi
        </div>

        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "24px",
            lineHeight: 1.1,
          }}
        >
          STYLE YOUR <br />
          <span
            style={{
              background:
                "linear-gradient(to right, #C5A358, #f3d99e, #C5A358)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LEGACY
          </span>
        </h1>

        <p
          style={{
            maxWidth: "448px",
            color: "#9ca3af",
            fontSize: "18px",
            marginBottom: "48px",
            fontWeight: 500,
            lineHeight: "1.6",
          }}
        >
          O'zingizga bo'lgan ishonchni yangilang. <br />
          Eng yaxshi ustalar xizmatida bo'ling.
        </p>

        <button
          onClick={handleBooking}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsPressed(false);
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          style={{
            position: "relative",
            backgroundColor: isHovered ? "#d4b36d" : "#C5A358",
            color: "#000",
            padding: "24px 64px",
            borderRadius: "18px",
            fontSize: "20px",
            fontWeight: 900,
            border: "none",
            cursor: "pointer",
            marginBottom: "100px",
            overflow: "hidden",
            outline: "none",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: isHovered
              ? "0 20px 60px rgba(197, 163, 88, 0.5), 0 0 20px rgba(197, 163, 88, 0.3)"
              : "0 15px 40px rgba(197, 163, 88, 0.2)",

            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transform: isPressed
              ? "scale(0.95)"
              : isHovered
              ? "translateY(-8px)"
              : "translateY(0)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: isHovered ? "150%" : "-150%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
              transform: "skewX(-25deg)",
              transition: isHovered ? "left 0.8s ease-in-out" : "none",
            }}
          />

          <span style={{ position: "relative", zIndex: 1 }}>BRON QILISH</span>
        </button>
      </div>
    </main>
  );
}
