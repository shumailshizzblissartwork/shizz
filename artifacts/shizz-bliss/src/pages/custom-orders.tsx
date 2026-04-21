import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Mail, MessageCircle } from "lucide-react";

const STUDIO_EMAIL = "shumailartwork@gmail.com";
const WHATSAPP_NUMBER = "923238224001";

export default function CustomOrders() {
  const { toast } = useToast();
  const [location] = useLocation();
  const [pieceParam, setPieceParam] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const piece = params.get("piece");
    if (piece) setPieceParam(piece);
  }, [location]);

  function buildBody(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const piece = (data.get("piece") || "").toString().trim();
    const vision = (data.get("vision") || "").toString().trim();
    const budget = (data.get("budget") || "").toString().trim();
    const timeline = (data.get("timeline") || "").toString().trim();

    const lines = [
      "Assalamu Alaikum Shumail,",
      "",
      "I would like to commission a bespoke piece. Here are the details:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone / WhatsApp: ${phone}` : "",
      `Type of Piece: ${piece}`,
      "",
      "My Vision:",
      vision,
      "",
      `Budget Range: ${budget || "Not specified"}`,
      `Desired Timeline: ${timeline || "Flexible"}`,
      "",
      "Looking forward to hearing from you.",
      "",
      `— ${name}`,
    ].filter(Boolean);

    return { name, email, body: lines.join("\n"), piece };
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { body, piece } = buildBody(form);
    const subject = `Bespoke Commission Inquiry${piece ? ` — ${piece}` : ""}`;
    const mailto = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast({
      title: "Opening your email...",
      description: `Your email app will open with the inquiry pre-filled, addressed to ${STUDIO_EMAIL}. Just press send!`,
    });
  };

  const handleWhatsAppSubmit = () => {
    const form = document.getElementById("commission-form") as HTMLFormElement;
    if (!form || !form.checkValidity()) {
      form?.reportValidity();
      return;
    }
    const { body } = buildBody(form);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
      "_blank",
    );
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
            <h2 className="text-2xl font-serif mb-2 border-b border-border/50 pb-4">Commission Inquiry</h2>
            <p className="text-xs text-muted-foreground mb-8 mt-4 leading-relaxed">
              Fill out the form below — your inquiry will be sent directly to{" "}
              <span className="text-primary">{STUDIO_EMAIL}</span>. Prefer WhatsApp? Use the green button at the bottom.
            </p>

            <form id="commission-form" onSubmit={handleEmailSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</Label>
                  <Input id="name" name="name" required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="Enter your name" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</Label>
                  <Input id="email" name="email" type="email" required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="Enter your email" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone / WhatsApp</Label>
                  <Input id="phone" name="phone" className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="e.g. 03001234567" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="piece" className="text-xs uppercase tracking-widest text-muted-foreground">Type of Piece</Label>
                  <Input id="piece" name="piece" defaultValue={pieceParam} required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="e.g. Resin Wall Art, Name Plaque" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="vision" className="text-xs uppercase tracking-widest text-muted-foreground">Your Vision</Label>
                <Textarea
                  id="vision"
                  name="vision"
                  required
                  className="bg-transparent border-border rounded-none min-h-[150px] resize-none focus-visible:ring-primary"
                  placeholder="Describe the colors, mood, dimensions, and where the piece will be placed..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="budget" className="text-xs uppercase tracking-widest text-muted-foreground">Budget Range (PKR)</Label>
                  <select id="budget" name="budget" className="w-full bg-transparent border border-border rounded-none h-12 px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary text-foreground text-sm">
                    <option value="" className="bg-background text-foreground">Select a range</option>
                    <option value="Under Rs. 5,000" className="bg-background text-foreground">Under Rs. 5,000</option>
                    <option value="Rs. 5,000 - Rs. 15,000" className="bg-background text-foreground">Rs. 5,000 - Rs. 15,000</option>
                    <option value="Rs. 15,000 - Rs. 50,000" className="bg-background text-foreground">Rs. 15,000 - Rs. 50,000</option>
                    <option value="Rs. 50,000 - Rs. 1,00,000" className="bg-background text-foreground">Rs. 50,000 - Rs. 1,00,000</option>
                    <option value="Rs. 1,00,000+" className="bg-background text-foreground">Rs. 1,00,000+</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="timeline" className="text-xs uppercase tracking-widest text-muted-foreground">Desired Timeline</Label>
                  <Input id="timeline" name="timeline" className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="e.g. 4-6 weeks, flexible" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-none h-16 text-sm tracking-widest uppercase text-black font-semibold flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg,#d4af37,#e8729a,#a78bfa)" }}
                >
                  <Mail className="w-4 h-4" /> Send via Email
                </Button>
                <Button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  size="lg"
                  className="rounded-none h-16 text-sm tracking-widest uppercase text-white font-semibold flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-16 text-center space-y-4">
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Please note that bespoke commissions require a non-refundable deposit upon design approval. Our current waitlist for major resin installations is 6-8 weeks.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Direct contact: <span className="text-primary">{STUDIO_EMAIL}</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
