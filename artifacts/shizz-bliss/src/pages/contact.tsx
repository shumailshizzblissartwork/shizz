import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle } from "lucide-react";

const STUDIO_EMAIL = "shumailartwork@gmail.com";
const WHATSAPP_NUMBER = "923238224001";

const SUBJECT_LABELS: Record<string, string> = {
  shipping: "Shipping Inquiry",
  product: "Product Question",
  press: "Press / Collaboration",
  custom: "Custom Order Inquiry",
  other: "General Inquiry",
};

export default function Contact() {
  const { toast } = useToast();

  function buildEmail(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const subjectKey = (data.get("subject") || "other").toString();
    const subjectLabel = SUBJECT_LABELS[subjectKey] || "General Inquiry";
    const message = (data.get("message") || "").toString().trim();

    const body = [
      "Assalamu Alaikum Shumail,",
      "",
      `Topic: ${subjectLabel}`,
      "",
      "Message:",
      message,
      "",
      "— Contact Details —",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone / WhatsApp: ${phone}` : "",
      "",
      "Looking forward to your response.",
      "",
      `— ${name}`,
    ].filter(Boolean).join("\n");

    return { subject: `[Shizz Bliss Contact] ${subjectLabel} — ${name}`, body };
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { subject, body } = buildEmail(form);
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast({
      title: "Opening your email...",
      description: `Your email app will open with the message ready, addressed to ${STUDIO_EMAIL}. Just press send!`,
    });
  };

  const handleWhatsAppSubmit = () => {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    if (!form || !form.checkValidity()) {
      form?.reportValidity();
      return;
    }
    const { body } = buildEmail(form);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`, "_blank");
  };

  return (
    <Layout>
      <div className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <p className="text-primary tracking-widest uppercase text-xs mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Contact the Studio</h1>
          <p className="text-muted-foreground font-light text-lg">
            For general inquiries, press, or shipping questions, please reach out to our team.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="font-serif text-2xl mb-4">Studio Details</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  Based in Karachi, Pakistan. <br/>
                  Operating globally.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4 text-primary">Global Shipping Guarantee</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
                  "Art without borders." We safely ship our delicate resin artworks and sculptures to discerning collectors worldwide using premium courier services with full insurance.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4">Direct Contact</h3>
                <div className="space-y-2 text-sm text-muted-foreground font-light">
                  <p>Email: <span className="text-primary">{STUDIO_EMAIL}</span></p>
                  <p>WhatsApp: <span className="text-primary">+92 323 8224001</span></p>
                  <p>Hours: Mon - Sat, 10am - 8pm (PKT)</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 bg-card border border-border p-8 md:p-12 shadow-2xl shadow-black/50">
              <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
                Tell us <span className="text-primary">who you are</span>, <span className="text-primary">what</span> you're contacting about, and <span className="text-primary">why</span> — your message goes straight to our studio inbox.
              </p>
              <form id="contact-form" onSubmit={handleEmailSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Your Name *</Label>
                    <Input id="name" name="name" required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="Who is contacting us?" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email *</Label>
                    <Input id="email" name="email" type="email" required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="Where should we reply?" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone / WhatsApp (Optional)</Label>
                  <Input id="phone" name="phone" className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" placeholder="e.g. 03001234567" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">What is this about? *</Label>
                  <select id="subject" name="subject" required defaultValue="" className="w-full bg-transparent border border-border rounded-none h-12 px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary text-foreground text-sm">
                    <option value="" disabled className="bg-background text-foreground">Select a topic</option>
                    <option value="shipping" className="bg-background text-foreground">Shipping Inquiry</option>
                    <option value="product" className="bg-background text-foreground">Product Question</option>
                    <option value="custom" className="bg-background text-foreground">Custom Order Inquiry</option>
                    <option value="press" className="bg-background text-foreground">Press / Collaboration</option>
                    <option value="other" className="bg-background text-foreground">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Your Message — tell us why you're reaching out *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    placeholder="Share details: which product, your question, any specific requirements, deadlines, etc. The more you tell us, the better we can help."
                    className="bg-transparent border-border rounded-none min-h-[180px] resize-none focus-visible:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
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

          </div>
        </div>
      </section>
    </Layout>
  );
}
