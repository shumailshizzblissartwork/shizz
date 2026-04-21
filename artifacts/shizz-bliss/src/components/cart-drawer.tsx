import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "+923238224001"; // Replace with your actual WhatsApp number e.g. 923001234567

function buildWhatsAppMessage(
  items: ReturnType<typeof useCart>["items"],
  total: number,
) {
  const lines = items.map(
    (i) =>
      `• ${i.name} × ${i.quantity} — ${formatPrice(i.price * i.quantity)}`,
  );
  const message = [
    "🌸 *New Order — Shumail's Shizz Bliss Studio*",
    "",
    "*Order Details:*",
    ...lines,
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "Please confirm my order and share shipping details. Thank you! ✨",
  ].join("\n");
  return encodeURIComponent(message);
}

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount,
  } = useCart();

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    const msg = buildWhatsAppMessage(items, total);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0f0f0f] border-l border-border/40 z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border/40">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-lg tracking-wide">
              Your Collection
            </h2>
            {itemCount > 0 && (
              <span
                className="text-xs rounded-full px-2 py-0.5 font-medium text-black"
                style={{
                  background: "linear-gradient(135deg, #d4af37, #e8729a)",
                }}
              >
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 px-6 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-20">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/30" />
              <p className="text-muted-foreground font-light text-sm">
                Your collection is empty.
              </p>
              <button
                onClick={closeCart}
                className="text-xs uppercase tracking-widest text-primary border-b border-primary pb-0.5 hover:opacity-80 transition-opacity"
              >
                Explore Collections
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 pb-5 border-b border-border/30 last:border-0"
              >
                <div className="w-20 h-24 bg-muted overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-sm text-foreground leading-snug mb-1 truncate">
                    {item.name}
                  </h3>
                  <p className="text-primary text-sm font-light mb-3">
                    {formatPrice(item.price)}
                  </p>
                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 border border-border/60 flex items-center justify-center hover:border-primary transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm w-6 text-center tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 border border-border/60 flex items-center justify-center hover:border-primary transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-muted-foreground hover:text-red-400 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-light tracking-wide">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border/40 px-6 py-6 space-y-5 bg-[#0c0c0c]">
            {/* Rainbow divider */}
            <div
              className="w-full h-[1px] mb-2"
              style={{
                background:
                  "linear-gradient(90deg, #d4af37, #e8729a, #a78bfa, #60a5fa, #34d399)",
              }}
            />

            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Order Total
              </span>
              <span className="font-serif text-2xl text-foreground">
                {formatPrice(total)}
              </span>
            </div>

            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Shipping & taxes calculated at checkout. Our team will confirm
              your order via WhatsApp within 24 hours.
            </p>

            <Button
              onClick={handleWhatsAppOrder}
              size="lg"
              className="w-full h-14 rounded-none text-sm tracking-widest uppercase font-semibold flex items-center justify-center gap-3 text-black"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </Button>

            <button
              onClick={clearCart}
              className="w-full text-xs uppercase tracking-widest text-muted-foreground hover:text-red-400 transition-colors py-1"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
