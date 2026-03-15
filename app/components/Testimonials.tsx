"use client";

import { motion } from "framer-motion";
import { testimonials } from "../lib/testimonials";
import { fadeInUp, staggerContainer } from "../lib/animations";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.3em] uppercase text-accent">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold md:text-5xl">
            What Trekkers Say
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="rounded-2xl border border-foreground/10 bg-foreground/5 p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-accent"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-foreground/70">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 border-t border-foreground/10 pt-4">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-foreground/50">{t.country}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
