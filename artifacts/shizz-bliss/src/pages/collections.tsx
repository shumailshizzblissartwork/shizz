import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { categories } from "@/lib/data";

export default function Collections() {
  return (
    <Layout>
      <div className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <p className="text-primary tracking-widest uppercase text-xs mb-4">The Atelier</p>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Our Collections</h1>
          <p className="text-muted-foreground font-light text-lg">
            Discover our curated selections of fine art, luxury home fragrance, and artisan tools. Each collection is a testament to our dedication to elegance.
          </p>
        </div>
      </div>

      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {categories.map((category, index) => (
              <div key={category.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-muted relative group">
                  <Link href={`/collections/${category.id}`}>
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </Link>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">{category.name}</h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">
                    {category.description}
                  </p>
                  <Link 
                    href={`/collections/${category.id}`} 
                    className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                  >
                    <span>Explore Collection</span>
                    <span className="w-12 h-[1px] bg-border group-hover:bg-primary transition-colors duration-300 block" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
