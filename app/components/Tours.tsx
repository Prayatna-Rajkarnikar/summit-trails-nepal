"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { tours } from "../lib/tours";
import { fadeInUp, staggerContainer } from "../lib/animations";

export default function Tours() {
  return (
    <section id="tours" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.3em] uppercase text-accent">
            Our Treks
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold md:text-5xl">
            Featured Adventures
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {tours.map((tour) => (
            <motion.div
              key={tour.name}
              variants={fadeInUp}
              className="cursor-pointer group overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={`${tour.name} trek in Nepal`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-[#0a0a0a]">
                  {tour.difficulty}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold">
                  {tour.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {tour.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-4">
                  <div className="flex gap-4 text-sm text-foreground/50">
                    <span>{tour.duration}</span>
                    <span>|</span>
                    <span>{tour.difficulty}</span>
                  </div>
                  <span className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-accent">
                    {tour.price}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="mt-4 block cursor-pointer rounded-full border border-accent/40 py-2.5 text-center text-sm font-medium uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-[#0a0a0a]"
                >
                  Book This Trek
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
