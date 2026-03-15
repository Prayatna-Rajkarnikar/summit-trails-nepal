"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "../lib/animations";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600786428316-0d6cc71d5181?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",
    alt: "Trekkers crossing a suspension bridge in Nepal",
  },
  {
    src: "https://images.unsplash.com/photo-1681018755464-1d3495867767?w=800",
    alt: "Annapurna mountain range at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1753952969735-9be9feb9a217?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Trekkers on a Himalayan mountain trail in Nepal",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800",
    alt: "Prayer flags fluttering in the Himalayan wind",
  },
  {
    src: "https://images.unsplash.com/photo-1762662279649-b65fd2f39118?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",
    alt: "Mountain village nestled in the Himalayas",
  },
  {
    src: "https://images.unsplash.com/photo-1746597061227-eb3767a3822a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Nepal mountain landscape with dramatic clouds",
  },
  {
    src: "https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=800",
    alt: "Sherpa guide leading trekkers through Nepal",
  },
  {
    src: "https://images.unsplash.com/photo-1668332422863-311c79508ddd?w=800",
    alt: "Glacial lake reflecting snow-capped peaks",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-foreground/[0.03] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.3em] uppercase text-accent">
            Gallery
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold md:text-5xl">
            Moments From the Trail
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="mb-4 overflow-hidden rounded-xl break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={i % 3 === 0 ? 600 : i % 3 === 1 ? 500 : 450}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
