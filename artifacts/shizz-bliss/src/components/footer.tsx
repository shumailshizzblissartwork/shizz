import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary py-20 mt-24 border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/">
            <span className="font-serif text-2xl tracking-widest text-primary font-medium uppercase mb-6 block">
              SHIZZ BLISS
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
            Curating soul-stirring art and sensory experiences that transform everyday spaces into galleries of elegance. A Shumail Resin & Artwork label, based in Karachi, Pakistan.
          </p>
          <p className="text-xs text-muted-foreground/70 uppercase tracking-widest font-mono">
            Global Shipping • Art without borders
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg text-foreground mb-6">Collections</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/collections/resin-art" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                Resin Art
              </Link>
            </li>
            <li>
              <Link href="/collections/scented-candles" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                Scented Candles
              </Link>
            </li>
            <li>
              <Link href="/collections/creators-studio" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                Creator's Studio
              </Link>
            </li>
            <li>
              <Link href="/collections/textured-art" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                Textured Art
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-foreground mb-6">Maison</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/custom-orders" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                Bespoke Orders
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-muted-foreground/60 tracking-wider">
          © {new Date().getFullYear()} Shizz Bliss. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 tracking-wider mt-4 md:mt-0">
          Crafted with reverence in Karachi.
        </p>
      </div>
    </footer>
  );
}
