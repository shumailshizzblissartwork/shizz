import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { categories } from "@/lib/data";

const categoryAccent: Record<string, string> = {
  "resin-art":       "#e8729a",
  "scented-candles": "#fbbf24",
  "vinyl-stickers":  "#60a5fa",
  "textured-art":    "#a78bfa",
  "creators-studio": "#34d399",
};

export default function Collections() {
  return (
    <Layout>
      <div className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <p className="tracking-widest uppercase text-xs mb-4 gradient-wing-text">The Atelier</p>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Our Collections</h1>
          <p className="text-muted-foreground font-light text-lg">
            Discover our curated selections of fine art, luxury home fragrance, and artisan tools. Each collection is a testament to our dedication to elegance.
          </p>
          <div className="mt-8 mx-auto w-40 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, #d4af37, #e8729a, #a78bfa, #60a5fa, #34d399)" }} />
        </div>
      </div>

      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-28">
            {categories.map((category, index) => {
              const accent = categoryAccent[category.id] ?? "#d4af37";
              return (
                <div
                  key={category.id}
                  className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24`}
                >
                  <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-muted relative group">
                    <Link href={`/collections/${category.id}`}>
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      {/* Coloured accent bar */}
                      <div
                        className="absolute bottom-0 left-0 w-full h-[4px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                        style={{ background: accent }}
                      />
                    </Link>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col items-start">
                    {/* Coloured dot + category label */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
                      <span className="text-xs tracking-widest uppercase font-light" style={{ color: accent }}>Collection</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">{category.name}</h2>
                    {/* Accent underline */}
                    <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: accent }} />
                    <p className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">
                      {category.description}
                    </p>
                    <Link
                      href={`/collections/${category.id}`}
                      className="group/link inline-flex items-center gap-4 text-sm uppercase tracking-widest transition-colors"
                      style={{ color: accent }}
                    >
                      <span>Explore Collection</span>
                      <span
                        className="w-12 h-[1px] block transition-all duration-300 group-hover/link:w-20"
                        style={{ background: accent }}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
