import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react";
import logoImg from "@assets/WhatsApp_Image_2026-04-19_at_6.43.48_PM_(1)_1776668685304.jpeg";
import { useCart } from "@/lib/cart-context";

const collections = [
  { href: "/collections/resin-art", label: "Resin Art" },
  { href: "/collections/scented-candles", label: "Scented Candles" },
  { href: "/collections/vinyl-stickers", label: "Vinyl Stickers" },
  { href: "/collections/textured-art", label: "Textured Art" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = () => setCollectionsOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="shrink-0 rounded-full p-[2.5px] transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #d4af37, #e8729a, #a78bfa, #60a5fa, #34d399, #d4af37)" }}>
            <div className="w-11 h-11 rounded-full overflow-hidden bg-[#0c0c14]">
              <img
                src={logoImg}
                alt="Shumail's Shizz Bliss Studio Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-sm md:text-base tracking-widest text-primary font-semibold uppercase">
              Shumail's Shizz Bliss
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-light">
              Premium Handcrafted Essentials
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className={cn(
              "text-xs tracking-wider uppercase transition-colors hover:text-primary",
              location === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </Link>

          {/* Collections Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setCollectionsOpen(!collectionsOpen)}
              className={cn(
                "flex items-center gap-1 text-xs tracking-wider uppercase transition-colors hover:text-primary",
                location.startsWith("/collections") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Collections
              <ChevronDown size={12} className={cn("transition-transform", collectionsOpen && "rotate-180")} />
            </button>
            {collectionsOpen && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-md border border-border/50 rounded-sm shadow-lg min-w-[180px] py-2">
                {collections.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setCollectionsOpen(false)}
                    className="block px-5 py-2.5 text-xs tracking-widest uppercase text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {c.label}
                  </Link>
                ))}
                <div className="border-t border-border/30 mt-2 pt-2">
                  <Link
                    href="/collections"
                    onClick={() => setCollectionsOpen(false)}
                    className="block px-5 py-2.5 text-xs tracking-widest uppercase text-primary/70 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    View All
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/custom-orders"
            className={cn(
              "text-xs tracking-wider uppercase transition-colors hover:text-primary",
              location === "/custom-orders" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Bespoke Orders
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-xs tracking-wider uppercase transition-colors hover:text-primary",
              location === "/about" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Our Story
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-xs tracking-wider uppercase transition-colors hover:text-primary",
              location === "/contact" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Contact
          </Link>

          {/* Cart Icon */}
          <button
            onClick={openCart}
            className="relative text-muted-foreground hover:text-primary transition-colors p-1"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center text-black leading-none"
                style={{ background: "linear-gradient(135deg, #d4af37, #e8729a)" }}
              >
                {itemCount}
              </span>
            )}
          </button>

          <Link
            href="/custom-orders"
            className="border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors tracking-widest uppercase text-[10px] px-4 py-2 rounded-sm"
          >
            Commission
          </Link>
        </nav>

        {/* Mobile right side: cart + hamburger */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button
            onClick={openCart}
            className="relative text-muted-foreground hover:text-primary transition-colors p-1"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center text-black leading-none"
                style={{ background: "linear-gradient(135deg, #d4af37, #e8729a)" }}
              >
                {itemCount}
              </span>
            )}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background flex flex-col items-center justify-center gap-6 transition-transform duration-500 ease-in-out md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="rounded-full p-[3px] mb-2" style={{ background: "linear-gradient(135deg, #d4af37, #e8729a, #a78bfa, #60a5fa, #34d399, #d4af37)" }}>
            <div className="w-20 h-20 rounded-full overflow-hidden bg-[#0c0c14]">
              <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase hover:text-primary transition-colors">Home</Link>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Collections</span>
            {collections.map((c) => (
              <Link key={c.href} href={c.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif tracking-widest uppercase hover:text-primary transition-colors text-muted-foreground">
                {c.label}
              </Link>
            ))}
          </div>
          <Link href="/custom-orders" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase hover:text-primary transition-colors">Bespoke Orders</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase hover:text-primary transition-colors">Our Story</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase hover:text-primary transition-colors">Contact</Link>
          <Link href="/custom-orders" onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-primary text-primary-foreground px-8 py-4 tracking-widest uppercase text-sm">
            Commission Your Vision
          </Link>
        </div>
      </div>
    </header>
  );
}
