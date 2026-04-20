import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will respond within 24-48 hours.",
    });
    (e.target as HTMLFormElement).reset();
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
                  <p>Email: atelier@shizzbliss.com</p>
                  <p>Hours: Mon - Fri, 10am - 6pm (PKT)</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 bg-card border border-border p-8 md:p-12 shadow-2xl shadow-black/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</Label>
                    <Input id="name" required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
                    <Input id="email" type="email" required className="bg-transparent border-border rounded-none h-12 focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">Subject</Label>
                  <select id="subject" required className="w-full bg-transparent border border-border rounded-none h-12 px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary text-foreground text-sm">
                    <option value="" className="bg-background text-foreground">Select a topic</option>
                    <option value="shipping" className="bg-background text-foreground">Shipping Inquiry</option>
                    <option value="product" className="bg-background text-foreground">Product Question</option>
                    <option value="press" className="bg-background text-foreground">Press / Collaboration</option>
                    <option value="other" className="bg-background text-foreground">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    className="bg-transparent border-border rounded-none min-h-[150px] resize-none focus-visible:ring-primary" 
                  />
                </div>

                <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-16 text-sm tracking-widest uppercase px-12">
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
