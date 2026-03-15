"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.3em] uppercase text-accent">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold md:text-5xl">
            Plan Your Adventure
          </h2>
          <p className="mx-auto mt-4 max-w-md text-foreground/60">
            Ready to trek? Send us a message and we&apos;ll craft the perfect
            itinerary for you.
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-foreground/70">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-foreground/70">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="trek" className="mb-2 block text-sm text-foreground/70">
              Desired Trek
            </label>
            <select
              id="trek"
              className="cursor-pointer w-full rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled className="bg-[#0a0a0a] text-foreground">
                Select a trek
              </option>
              <option className="bg-[#0a0a0a] text-foreground">Everest Base Camp</option>
              <option className="bg-[#0a0a0a] text-foreground">Annapurna Circuit</option>
              <option className="bg-[#0a0a0a] text-foreground">Langtang Valley</option>
              <option className="bg-[#0a0a0a] text-foreground">Custom Trek</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-foreground/70">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your dream trek..."
              className="w-full resize-none rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button
              type="submit"
              className="cursor-pointer w-full rounded-full bg-accent px-8 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90 sm:w-auto"
            >
              Send Message
            </button>
            <a
              href="https://wa.me/9779800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
