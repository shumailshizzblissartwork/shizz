import { Link } from "wouter";
import logoImg from "@assets/WhatsApp_Image_2026-04-19_at_6.43.48_PM_1776668676095.jpeg";

export function Footer() {
  return (
    <footer className="bg-secondary py-20 mt-24 border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-4 mb-6 group w-fit">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/60 group-hover:border-primary transition-colors shrink-0">
              <img
                src={logoImg}
                alt="Shumail's Shizz Bliss Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-widest text-primary font-semibold uppercase leading-tight">
                Shumail's Shizz Bliss Studio
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-light mt-0.5">
                Premium Handcrafted Essentials
              </span>
            </div>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
            Curating soul-stirring art and sensory experiences that transform everyday spaces into galleries of elegance. Based in Karachi, Pakistan — serving the world.
          </p>
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-mono">
            Scented Candles &nbsp;|&nbsp; Resin Art &nbsp;|&nbsp; Vinyl Stickers
          </p>
          <p className="text-xs text-muted-foreground/50 uppercase tracking-widest font-mono mt-2">
            Global Shipping • Art without borders
          </p>
        </div>

        <div>
          <h4 className="font-serif text-base text-foreground mb-6 tracking-wider">Collections</h4>
          <ul className="space-y-4">
            {[
              { href: "/collections/resin-art", label: "Resin Art" },
              { href: "/collections/scented-candles", label: "Scented Candles" },
              { href: "/collections/vinyl-stickers", label: "Vinyl Stickers" },
              { href: "/collections/textured-art", label: "Textured Art" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base text-foreground mb-6 tracking-wider">Studio</h4>
          <ul className="space-y-4">
            {[
              { href: "/about", label: "Our Story" },
              { href: "/custom-orders", label: "Bespoke Orders" },
              { href: "/collections", label: "All Collections" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-muted-foreground/60 tracking-wider">
          © {new Date().getFullYear()} Shumail's Shizz Bliss Studio. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 tracking-wider mt-4 md:mt-0">
          Crafted with reverence in Karachi, Pakistan.
        </p>
      </div>
    </footer>
  );
}
