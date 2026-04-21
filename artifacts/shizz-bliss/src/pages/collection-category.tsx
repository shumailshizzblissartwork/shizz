import { Layout } from "@/components/layout";
import { Link, useParams } from "wouter";
import { categories, products, formatPrice } from "@/lib/data";
import NotFound from "./not-found";

const CARD_COLORS = ["#e8729a", "#fbbf24", "#60a5fa", "#a78bfa", "#34d399", "#d4af37"];

export default function CollectionCategory() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);
  const categoryProducts = products.filter((p) => p.categoryId === id);

  if (!category) return <NotFound />;

  return (
    <Layout>
      <div className="pt-40 pb-20 bg-secondary/20">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <Link href="/collections" className="text-primary tracking-widest uppercase text-xs mb-6 inline-block hover:underline underline-offset-4">
            ← Back to Collections
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">{category.name}</h1>
          <p className="text-muted-foreground font-light text-lg">
            {category.description}
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-light">No pieces currently available in this collection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20">
              {categoryProducts.map((product, i) => {
                const c = CARD_COLORS[i % CARD_COLORS.length];
                return (
                  <Link key={product.id} href={`/product/${product.id}`} className="group flex flex-col">
                    <div
                      className="relative aspect-[4/5] overflow-visible bg-muted mb-8 transition-all duration-700"
                      style={{
                        ["--card-glow" as any]: c,
                      }}
                    >
                      {/* Colored gradient glow halo behind image — appears on hover */}
                      <div
                        className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl -z-0"
                        style={{
                          background: `radial-gradient(ellipse at center, ${c}80 0%, ${c}40 35%, transparent 70%)`,
                        }}
                      />
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {product.isCustom && (
                          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground text-[10px] uppercase tracking-widest px-3 py-1 z-10">
                            Bespoke
                          </div>
                        )}
                        {/* Bottom colored accent line */}
                        <div
                          className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                          style={{ background: `linear-gradient(90deg, transparent, ${c}, transparent)` }}
                        />
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-3 transition-colors duration-300" style={{ color: undefined }}>
                      <span className="group-hover:text-[var(--hover-c)] transition-colors duration-300" style={{ ["--hover-c" as any]: c }}>{product.name}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm font-light mb-6 flex-1">{product.tagline}</p>
                    <div className="flex items-center justify-between border-t border-border/50 pt-4">
                      <span className="text-foreground tracking-wider font-medium">{formatPrice(product.price)}</span>
                      <span className="text-xs uppercase tracking-widest flex items-center gap-2 transition-colors duration-300" style={{ color: c }}>
                        Bring Art Home <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
