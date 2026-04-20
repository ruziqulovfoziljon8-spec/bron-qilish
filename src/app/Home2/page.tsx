"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import service from "../imagess/avto servise.jpg";

export default function Home2() {
  console.log("Home2 component rendered");
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <img
          src={service.src}
          alt="Service Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header style={{ padding: "30px 40px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(10px)",
              padding: "10px 25px",
              borderRadius: "15px",
              border: "1px solid rgba(52, 152, 219, 0.3)",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#fff",
                fontSize: "22px",
                fontWeight: 900,
              }}
            >
              LUXE <span style={{ color: "#3498db" }}>AUTO</span>
            </h2>
          </div>
        </header>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(30px, 8vw, 70px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              textShadow: "0 5px 20px rgba(0,0,0,0.8)",
              margin: "0 0 15px 0",
            }}
          >
            DRIVE WITH <br />
            <span style={{ color: "#3498db" }}>PERFECTION</span>
          </h1>

          <p
            style={{
              color: "#fff",
              fontSize: "18px",
              maxWidth: "550px",
              marginBottom: "35px",
              textShadow: "0 2px 10px rgba(0,0,0,1)",
              fontWeight: 500,
            }}
          >
            Professional avto-servis va diagnostika xizmatlari.
          </p>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => router.push("/AutoService")}
            style={{
              padding: "18px 45px",
              fontSize: "16px",
              fontWeight: "900",
              backgroundColor: isHovered ? "#2980b9" : "#3498db",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0 10px 25px rgba(52, 152, 219, 0.4)",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            BRON QILISH
          </button>
        </div>
      </div>
    </main>
  );
}
