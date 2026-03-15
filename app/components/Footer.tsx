const footerLinks = [
  { name: "Tours", href: "#tours" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <a
            href="#"
            className="cursor-pointer font-[family-name:var(--font-cormorant)] text-xl font-bold tracking-wide text-accent"
          >
            Summit Trails
          </a>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="cursor-pointer text-sm text-foreground/50 transition-colors hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {["Instagram", "Facebook", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="cursor-pointer text-sm text-foreground/50 transition-colors hover:text-accent"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-foreground/30">
          &copy; {new Date().getFullYear()} Summit Trails Nepal. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
