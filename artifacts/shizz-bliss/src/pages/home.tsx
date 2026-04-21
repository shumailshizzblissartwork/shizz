import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { categories, products, formatPrice } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.png";

const categoryAccent: Record<string, { color: string; glow: string; label: string }> = {
  "resin-art":       { color: "#e8729a", glow: "rgba(232,114,154,0.25)", label: "accent-resin" },
  "scented-candles": { color: "#fbbf24", glow: "rgba(251,191,36,0.20)",  label: "accent-candle" },
  "vinyl-stickers":  { color: "#60a5fa", glow: "rgba(96,165,250,0.20)",  label: "accent-vinyl" },
  "textured-art":    { color: "#a78bfa", glow: "rgba(167,139,250,0.22)", label: "accent-texture" },
  "creators-studio": { color: "#34d399", glow: "rgba(52,211,153,0.18)",  label: "accent-studio" },
};

const promiseAccents = [
  { numeral: "I.", label: "Global Shipping", text: "Art without borders. Delivering our masterpieces safely to discerning collectors worldwide.", color: "#e8729a" },
  { numeral: "II.", label: "Bespoke Custom Orders", text: "Every vision deserves its own masterpiece. Commission works tailored to your space and soul.", color: "#60a5fa" },
  { numeral: "III.", label: "Hand-crafted Quality", text: "Made by hand, made to last generations. Unhurried, tactile, and deeply rare craftsmanship.", color: "#34d399" },
];

const SLIDE_COLORS = ["#e8729a", "#fbbf24", "#60a5fa", "#a78bfa", "#34d399", "#d4af37"];

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const mobileSlides = products.slice(0, 6);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % mobileSlides.length);
    }, 2000);
    return () => clearInterval(id);
  }, [mobileSlides.length]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/55 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img
            src={heroImg}
            alt="Golden and midnight blue swirls in resin"
            className="w-full h-full object-cover object-center scale-105 animate-in slide-in-from-bottom-4 duration-1000"
          />
        </div>

        {/* Subtle rainbow glow orbs */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #e8729a, transparent 70%)" }} />
          <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #60a5fa, transparent 70%)" }} />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }} />
        </div>

        <div className="container relative z-20 px-6 md:px-12 flex flex-col items-center text-center mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="tracking-[0.3em] uppercase text-sm mb-6 font-medium gradient-wing-text"
          >
            Shumail Resin & Artwork
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium text-foreground max-w-4xl leading-tight"
          >
            Galleries of <br />
            <span className="italic gradient-wing-text">Elegance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
          >
            We curate soul-stirring art and sensory experiences that transform everyday spaces into testaments of luxury.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <Button size="lg" className="text-sm tracking-widest uppercase px-8 py-6 h-auto rounded-none text-black font-semibold transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(232,114,154,0.55)] active:scale-[0.97]" style={{ background: "linear-gradient(135deg, #d4af37, #e8729a, #a78bfa)" }} asChild>
              <Link href="/collections">Shop the Collection</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-white/5 text-sm tracking-widest uppercase px-8 py-6 h-auto rounded-none transition-all duration-500 hover:scale-[1.04] hover:border-primary hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] active:scale-[0.97]" asChild>
              <Link href="/custom-orders">Commission Your Vision</Link>
            </Button>
          </motion.div>

          {/* Rainbow gradient divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 w-32 h-[2px] rounded-full"
            style={{ background: "linear-gradient(90deg, #d4af37, #e8729a, #a78bfa, #60a5fa, #34d399)" }}
          />
        </div>
      </section>

      {/* Brand Promises */}
      <section className="py-24 bg-secondary/50 border-y border-border/30">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border/30">
          {promiseAccents.map(({ numeral, label, text, color }) => (
            <div key={label} className="flex flex-col items-center pt-8 md:pt-0">
              <span className="font-serif italic text-2xl mb-4" style={{ color }}>{numeral}</span>
              <div className="w-8 h-[2px] rounded-full mb-5" style={{ background: color }} />
              <h3 className="uppercase tracking-widest text-sm mb-4 text-foreground">{label}</h3>
              <p className="text-muted-foreground font-light text-sm max-w-xs mx-auto">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rainbow divider */}
      <div className="gradient-divider mx-6 md:mx-12 my-0" />

      {/* Featured Collections */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="tracking-widest uppercase text-xs mb-4 gradient-wing-text">The Atelier</p>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">Curated Collections</h2>
            </div>
            <Link href="/collections" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const accent = categoryAccent[category.id] ?? { color: "#d4af37", glow: "rgba(212,175,55,0.2)" };
              return (
                <Link
                  key={category.id}
                  href={`/collections/${category.id}`}
                  className="group relative overflow-hidden aspect-[4/3] bg-muted block"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Gradient overlay tinted with category colour */}
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, ${accent.glow} 60%, transparent 100%)` }}
                  />
                  {/* Coloured accent line at bottom */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: accent.color }}
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-foreground mb-2">{category.name}</h3>
                    <p className="text-muted-foreground text-sm font-light mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{category.description}</p>
                    <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" style={{ color: accent.color }}>
                      Shop the Collection →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rainbow divider */}
      <div className="gradient-divider mx-6 md:mx-12 my-0" />

      {/* Featured Products */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="tracking-widest uppercase text-xs mb-4 gradient-wing-text">Signature Pieces</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">Iconic Additions</h2>
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-12">
            {featuredProducts.map((product, i) => {
              const colors = ["#e8729a", "#fbbf24", "#60a5fa"];
              const c = colors[i % colors.length];
              return (
                <Link key={product.id} href={`/product/${product.id}`} className="group flex flex-col transition-transform duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: c }} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-light mb-4 flex-1">{product.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground tracking-wider">{formatPrice(product.price)}</span>
                    <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300" style={{ color: c }}>Discover →</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile: auto-rotating slideshow (one at a time, every 2s) */}
          <div className="md:hidden relative">
            <div className="relative h-[480px] overflow-hidden">
              <AnimatePresence mode="wait">
                {mobileSlides.map((product, i) => {
                  if (i !== activeSlide) return null;
                  const c = SLIDE_COLORS[i % SLIDE_COLORS.length];
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: 60, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -60, scale: 0.96 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
                        <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-5 rounded-sm" style={{ boxShadow: `0 25px 60px -20px ${c}55` }}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)` }} />
                          <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: c }} />
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                          <h3 className="font-serif text-lg text-foreground">{product.name}</h3>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-foreground text-sm tracking-wider">{formatPrice(product.price)}</span>
                          <span className="text-xs uppercase tracking-widest" style={{ color: c }}>Discover →</span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {mobileSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: i === activeSlide ? 28 : 8,
                    background: i === activeSlide ? SLIDE_COLORS[i % SLIDE_COLORS.length] : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Process Teaser */}
      <section className="py-32 border-t border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden bg-muted">
              <img src={heroImg} alt="Artisan process" className="w-full h-full object-cover" />
              {/* Gradient corner accent */}
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #e8729a, #a78bfa, #60a5fa)" }} />
            </div>
            <div className="order-1 lg:order-2">
              <p className="tracking-widest uppercase text-xs mb-6 gradient-wing-text">The Process</p>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                Unhurried.<br />Tactile.<br />
                <span className="italic gradient-wing-text">Rare.</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-lg">
                Step into our atelier, where traditional Pakistani craftsmanship meets modern luxury. Every piece is born from intention, shaped by hand, and finished to museum-quality standards. We do not mass produce. We create.
              </p>
              <Button variant="outline" className="border-border text-foreground hover:bg-white/5 text-sm tracking-widest uppercase px-8 py-6 h-auto rounded-none transition-all duration-500 hover:scale-[1.04] hover:border-primary hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] active:scale-[0.97]" asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
