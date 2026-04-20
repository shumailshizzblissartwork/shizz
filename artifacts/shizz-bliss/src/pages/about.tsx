import { Layout } from "@/components/layout";
import heroImg from "@/assets/hero.png";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <div className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <p className="text-primary tracking-widest uppercase text-xs mb-4">Maison</p>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Our Story</h1>
          <p className="text-muted-foreground font-light text-xl italic font-serif leading-relaxed">
            "Art should not merely fill a space; it should define its soul."
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[3/4] bg-muted overflow-hidden">
              <img src={heroImg} alt="Artisan working with resin" className="w-full h-full object-cover" />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-foreground">The Origins of Shizz Bliss</h2>
              <div className="prose prose-invert prose-p:font-light prose-p:leading-relaxed prose-p:text-muted-foreground">
                <p>
                  Born in the vibrant heart of Karachi, Pakistan, Shizz Bliss emerged from a desire to elevate everyday objects into breathtaking works of art. Under the parent label Shumail Resin & Artwork, our studio began with a simple fascination: the interplay of light, pigment, and the frozen fluidity of resin.
                </p>
                <p>
                  What began as small, intimate pieces quickly evolved into a full luxury atelier. Today, we serve discerning collectors across the globe—from London to Dubai to New York—who seek art that is tactile, unhurried, and rare.
                </p>
              </div>

              <div className="pt-8 border-t border-border/50">
                <h3 className="text-lg font-serif mb-4 text-foreground">Our Philosophy</h3>
                <ul className="space-y-6">
                  <li>
                    <strong className="block text-primary uppercase tracking-widest text-xs mb-2">Intentionality Over Speed</strong>
                    <span className="text-sm text-muted-foreground font-light block">We do not mass produce. Each piece requires hours of pouring, curing, sanding, and polishing. True luxury takes time.</span>
                  </li>
                  <li>
                    <strong className="block text-primary uppercase tracking-widest text-xs mb-2">Heritage Meets Modernity</strong>
                    <span className="text-sm text-muted-foreground font-light block">We weave traditional Pakistani craftsmanship—like intricate beadwork and calligraphy—into sleek, contemporary resin and wax forms.</span>
                  </li>
                  <li>
                    <strong className="block text-primary uppercase tracking-widest text-xs mb-2">Uncompromising Materials</strong>
                    <span className="text-sm text-muted-foreground font-light block">From 18k gold leaf to platinum-cure silicone and museum-grade resins, we source only the finest materials available globally.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary/50 border-t border-border/30 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-3xl font-serif text-foreground mb-8">Experience the Craft</h2>
          <p className="text-muted-foreground font-light mb-10 leading-relaxed">
            Whether you are seeking a signature piece for your home, a deeply personal bespoke commission, or the finest tools to begin your own creative journey, we invite you to explore our collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/collections" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-5 text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors">
              Explore Collections
            </Link>
            <Link href="/custom-orders" className="inline-flex items-center justify-center border border-border bg-transparent text-foreground px-8 py-5 text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">
              Request a Commission
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
