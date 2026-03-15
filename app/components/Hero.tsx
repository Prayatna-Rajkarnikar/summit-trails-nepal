"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MountainScene = dynamic(() => import("./MountainScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Three.js 3D mountain scene */}
      <Suspense
        fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}
      >
        <MountainScene />
      </Suspense>

      {/* Gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-[family-name:var(--font-cormorant)] leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          <span className="block text-2xl font-medium uppercase tracking-[0.3em] text-white/80 sm:text-3xl md:text-4xl">
            Conquer the
          </span>
          <span className="mt-2 block text-7xl font-extrabold text-accent drop-shadow-[0_2px_16px_rgba(201,168,76,0.3)] sm:mt-3 sm:text-8xl md:text-9xl lg:text-[10rem]">
            Himalayas
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-8 h-[1px] w-24 bg-accent/60"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Guided treks. Small groups. Once-in-a-lifetime views.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#tours"
            className="cursor-pointer rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-wider text-[#0a0a0a] shadow-[0_4px_24px_rgba(201,168,76,0.4)] transition-all hover:shadow-[0_6px_32px_rgba(201,168,76,0.6)] hover:scale-105"
          >
            Explore Treks
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-accent hover:text-accent hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-white/40">
            Scroll
          </span>
          <div className="h-10 w-[1px] bg-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
