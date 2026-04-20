"use client";
import { useState } from "react";
import BarberProject from "./Home/page";
import AutoProject from "./Home2/page";

export default function Home() {
  const [active, setActive] = useState<"none" | "barber" | "auto">("none");

  if (active === "barber") {
    return (
      <div className="relative animate-in fade-in duration-500">
        <button
          onClick={() => setActive("none")}
          className="fixed top-5 left-5 z-[2000] bg-black/50 text-white px-6 py-2 rounded-full backdrop-blur-md border border-[#d4af37]/30 hover:bg-[#d4af37] transition-all"
        >
          ← Bosh sahifa
        </button>
        <BarberProject />
      </div>
    );
  }

  if (active === "auto") {
    return (
      <div className="relative animate-in fade-in duration-500">
        <button
          onClick={() => setActive("none")}
          className="fixed top-5 left-5 z-[2000] bg-blue-900/50 text-white px-6 py-2 rounded-full backdrop-blur-md border border-blue-400/30 hover:bg-blue-600 transition-all"
        >
          ← Bosh sahifa
        </button>
        <AutoProject />
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-black">
      <div className="text-center mb-12">
        <h2 className="text-gray-500 uppercase tracking-[0.5em] text-sm mb-2">
          Tanlang
        </h2>
        <h1 className="text-white text-4xl md:text-5xl font-thin tracking-tighter">
          PREMIUM <span className="font-black">SERVICES</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        <div
          onClick={() => setActive("barber")}
          className="group relative flex-1 bg-[#111] border border-white/5 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#d4af37]/50 hover:-translate-y-2 shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <span className="text-8xl font-black text-[#d4af37]">01</span>
          </div>

          <div className="relative z-10">
            <div className="w-12 h-1 px-1 bg-[#d4af37] mb-6" />
            <h2 className="text-[#d4af37] text-3xl font-black mb-4 tracking-tighter">
              LUXE CUTS
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Sizning uslubingiz — bu sizning merosingiz. Professional
              sartaroshlar va premium darajadagi xizmat.
            </p>
            <span className="text-white text-xs tracking-widest border-b border-white/20 pb-1 group-hover:border-[#d4af37] transition-colors">
              XIZMATLARNI KO'RISH →
            </span>
          </div>
        </div>

        <div
          onClick={() => {
            console.log("Auto clicked");
            setActive("auto");
          }}
          className="group relative flex-1 bg-[#111] border border-white/5 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <span className="text-8xl font-black text-blue-600">02</span>
          </div>

          <div className="relative z-10">
            <div className="w-12 h-1 px-1 bg-blue-600 mb-6" />
            <h2 className="text-white text-3xl font-black mb-4 tracking-tighter">
              LUXE <span className="text-blue-500">AUTO</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Avtomobillarga premium darajadagi texnik xizmat ko'rsatish va
              to'liq diagnostika.
            </p>
            <span className="text-white text-xs tracking-widest border-b border-white/20 pb-1 group-hover:border-blue-500 transition-colors">
              XIZMATLARNI KO'RISH →
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
