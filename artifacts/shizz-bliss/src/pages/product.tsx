import { Layout } from "@/components/layout";
import { Link, useParams } from "wouter";
import { products, categories, formatPrice } from "@/lib/data";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return <NotFound />;

  const category = categories.find((c) => c.id === product.categoryId);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Layout>
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground mb-12">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <span>/</span>
            <Link href={`/collections/${category?.id}`} className="hover:text-primary transition-colors">{category?.name}</Link>
            <span>/</span>
            <span className="text-foreground truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Gallery */}
            <div className="space-y-6">
              <div className="aspect-[4/5] bg-muted overflow-hidden relative">
                <img 
                  src={product.images[activeImage] || product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover animate-in fade-in duration-500"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`aspect-square overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col pt-4 lg:pt-10">
              {product.isCustom && (
                <span className="text-primary text-xs uppercase tracking-widest mb-4 inline-block">Bespoke Commission</span>
              )}
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4 leading-tight">{product.name}</h1>
              <p className="text-xl text-primary font-serif italic mb-8">{product.tagline}</p>
              
              <div className="text-2xl tracking-wider font-light mb-10 border-b border-border/50 pb-8">
                {formatPrice(product.price)}
              </div>

              <div className="prose prose-invert prose-p:font-light prose-p:leading-relaxed prose-p:text-muted-foreground mb-12 max-w-none">
                <p>{product.description}</p>
              </div>

              <div className="space-y-4 mb-12">
                <h4 className="text-sm uppercase tracking-widest text-foreground font-medium mb-4">The Details</h4>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                {product.isCustom ? (
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-16 text-sm tracking-widest uppercase" asChild>
                    <Link href={`/custom-orders?piece=${product.name}`}>Commission Your Vision</Link>
                  </Button>
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full rounded-none h-16 text-sm tracking-widest uppercase transition-all active:scale-[0.98] text-black font-semibold flex items-center justify-center gap-2"
                    style={{ background: added ? "linear-gradient(135deg,#34d399,#60a5fa)" : "linear-gradient(135deg,#d4af37,#e8729a,#a78bfa)" }}
                  >
                    {added ? <><Check className="w-4 h-4" /> Added to Cart</> : "Bring Art Home"}
                  </Button>
                )}
                
                <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground uppercase tracking-widest">
                  <span>Global Shipping</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>Artisanal Quality</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
