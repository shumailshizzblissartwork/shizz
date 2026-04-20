import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function CustomOrders() {
  const { toast } = useToast();
  const [location] = useLocation();
  const [pieceParam, setPieceParam] = useState("");

  useEffect(() => {
    // Parse query string for piece pre-fill
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const piece = params.get("piece");
    if (piece) setPieceParam(piece);
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "Our atelier will contact you shortly to discuss your bespoke vision.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <p className="text-primary tracking-widest uppercase text-xs mb-4">The Atelier</p>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Bespoke Commissions</h1>
          <p className="text-muted-foreground font-light text-lg">
            Every vision deserves its own masterpiece. We work closely with discerning clients to create personalized art that reflects their identity, space, and story.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="bg-card border border-border p-8 md:p-12 shadow-2xl shadow-black/50">
            <h2 className="text-2xl font-serif mb-8 border-b border-border/50 pb-4">Commission Inquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</Label>
                  <Input id="name" required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="Enter your name" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</Label>
                  <Input id="email" type="email" required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="Enter your email" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="piece" className="text-xs uppercase tracking-widest text-muted-foreground">Type of Piece</Label>
                <Input id="piece" defaultValue={pieceParam} required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="e.g. Resin Wall Art, Name Plaque, Custom Clock" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="vision" className="text-xs uppercase tracking-widest text-muted-foreground">Your Vision</Label>
                <Textarea 
                  id="vision" 
                  required 
                  className="bg-transparent border-border rounded-none min-h-[150px] resize-none focus-visible:ring-primary" 
                  placeholder="Describe the colors, mood, dimensions, and where the piece will be placed..." 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="budget" className="text-xs uppercase tracking-widest text-muted-foreground">Budget Range (USD)</Label>
                  <select id="budget" className="w-full bg-transparent border border-border rounded-none h-12 px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary text-foreground text-sm">
                    <option value="" className="bg-background text-foreground">Select a range</option>
                    <option value="under-500" className="bg-background text-foreground">Under $500</option>
                    <option value="500-1000" className="bg-background text-foreground">$500 - $1,000</option>
                    <option value="1000-5000" className="bg-background text-foreground">$1,000 - $5,000</option>
                    <option value="5000+" className="bg-background text-foreground">$5,000+</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="timeline" className="text-xs uppercase tracking-widest text-muted-foreground">Desired Timeline</Label>
                  <Input id="timeline" className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="e.g. 4-6 weeks, flexible" />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-16 text-sm tracking-widest uppercase mt-8">
                Submit Inquiry
              </Button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Please note that bespoke commissions require a non-refundable deposit upon design approval. Our current waitlist for major resin installations is 6-8 weeks.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
