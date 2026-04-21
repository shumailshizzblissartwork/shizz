import heroImg from "../assets/hero.png";
import penImg from "../assets/pen.png";
import bookmarkImg from "../assets/bookmark.png";
import clockImg from "../assets/clock.png";
import plaqueImg from "../assets/plaque.png";
import tasbeehImg from "../assets/tasbeeh.png";
import peonyCandleImg from "../assets/peony-candle.png";
import bubbleCandleImg from "../assets/bubble-candle.png";
import oudCandleImg from "../assets/oud-candle.png";
import peacockImg from "../assets/peacock.png";
import calligraphyStickersImg from "@assets/WhatsApp_Image_2026-04-19_at_8.59.39_PM_(6)_1776784663607.jpeg";

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // Price in PKR (Pakistani Rupees)
  image: string;
  images: string[];
  features: string[];
  isCustom?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const formatPrice = (n: number): string => `Rs. ${n.toLocaleString("en-PK")}`;

export const categories: Category[] = [
  {
    id: "resin-art",
    name: "Resin Art",
    description: "Bespoke pieces that capture time, light, and identity in crystal-clear resin.",
    image: penImg,
  },
  {
    id: "scented-candles",
    name: "Scented Candles",
    description: "Sculptural fragrances that transform the atmosphere of your sanctuary.",
    image: peonyCandleImg,
  },
  {
    id: "vinyl-stickers",
    name: "Vinyl Stickers",
    description: "Premium custom calligraphy vinyl decals — bold, precise, and built to last on any surface.",
    image: calligraphyStickersImg,
  },
  {
    id: "textured-art",
    name: "Textured Art",
    description: "Tactile masterpieces blending traditional heritage with dimensional modernity.",
    image: peacockImg,
  },
  {
    id: "creators-studio",
    name: "Creator's Studio",
    description: "Premium tools and supplies curated for the discerning artisan.",
    image: heroImg,
  },
];

export const products: Product[] = [
  // Resin Art
  {
    id: "resin-pen",
    categoryId: "resin-art",
    name: "Luxury Resin Fountain Pen",
    tagline: "A writing instrument reimagined as wearable art",
    description: "Crafted with midnight blue and gold leaf resin, this fountain pen is a testament to the unhurried art of writing. Featuring a premium gold nib and a flawlessly balanced body, it elevates the simple act of writing into a moment of pure indulgence. Each pen is individually poured and turned, ensuring no two swirling patterns are ever alike.",
    price: 7500,
    image: penImg,
    images: [penImg],
    features: ["Hand-turned resin body", "18k gold-plated nib", "Includes luxury presentation box", "Bespoke colorways available upon request"],
  },
  {
    id: "resin-bookmark",
    categoryId: "resin-art",
    name: "Marble-Swirl Resin Bookmark",
    tagline: "Mark your place in the story of elegance",
    description: "A sliver of frozen marble and gold, this resin bookmark is designed for the avid reader who appreciates the tactile beauty of a physical book. Infused with delicate gold flakes and a rich, swirling pigment, it catches the light beautifully as it rests between the pages of your favorite novel.",
    price: 1500,
    image: bookmarkImg,
    images: [bookmarkImg],
    features: ["Shatter-resistant artisanal resin", "Genuine gold leaf inclusions", "Silk tassel", "Slim profile to protect book binding"],
  },
  {
    id: "resin-clock",
    categoryId: "resin-art",
    name: "Midnight Galaxy Resin Clock",
    tagline: "Time suspended in a universe of your own",
    description: "An architectural statement piece for your wall. The Midnight Galaxy clock features deep, celestial swirls of dark blue, black, and gold resin, rimmed in brushed brass. It does not simply tell time; it commands the room, offering a moment of cosmic reflection every time you glance its way.",
    price: 14000,
    image: clockImg,
    images: [clockImg],
    features: ["Silent continuous sweep movement", "Brushed brass outer ring", "Multi-layered resin depth", "Diameter: 24 inches"],
  },
  {
    id: "bespoke-plaque",
    categoryId: "resin-art",
    name: "Bespoke Name Plaque",
    tagline: "Your identity, crystallized in resin",
    description: "Commission a bespoke name plaque that immortalizes your identity or family name in a stunning resin encasement. Perfect for executive desks, luxury home entrances, or as an heirloom gift. The calligraphy is meticulously rendered and then sealed in layers of crystal-clear and gold-flecked resin.",
    price: 5500,
    image: plaqueImg,
    images: [plaqueImg],
    isCustom: true,
    features: ["Custom Arabic or English calligraphy", "Choice of base pigment and inclusions", "Beveled edges", "Stand included"],
  },
  {
    id: "tasbeeh",
    categoryId: "resin-art",
    name: "Artisan Tasbeeh",
    tagline: "Devotion elevated to artisan heirloom",
    description: "These luxury prayer beads are crafted from deep-toned resin with intricate gold accents. Designed to feel substantial and comforting in the hand, this Tasbeeh is a beautiful marriage of faith and fine craftsmanship, meant to be passed down through generations.",
    price: 3500,
    image: tasbeehImg,
    images: [tasbeehImg],
    features: ["99 beads with markers", "Hand-knotted silk thread", "Custom metallic accents", "Velvet pouch included"],
  },

  // Scented Candles
  {
    id: "peony-candle",
    categoryId: "scented-candles",
    name: "Peony Sculptural Candle",
    tagline: "Fragrance meets fine art in a bloom that never wilts",
    description: "A stunning, intricately carved peony flower rendered in premium soy-blend wax. This sculptural candle serves as a breathtaking centerpiece before it is ever lit. When burned, it releases a delicate, sophisticated floral bouquet that fills the room without overpowering it.",
    price: 2200,
    image: peonyCandleImg,
    images: [peonyCandleImg],
    features: ["Intricate petal detailing", "Premium soy-beeswax blend", "Lead-free cotton wick", "Burn time: 40+ hours"],
  },
  {
    id: "bubble-candle",
    categoryId: "scented-candles",
    name: "Bubble Sculptural Candle",
    tagline: "Architectural beauty, made to be burned",
    description: "Minimalist, geometric, and undeniably chic. The Bubble candle is a modern icon of interior styling. Poured in a soft ivory hue, it casts intriguing shadows and provides a warm, ambient glow that softens the architectural rigidity of the design.",
    price: 1500,
    image: bubbleCandleImg,
    images: [bubbleCandleImg],
    features: ["Modern geometric design", "Unscented or subtly fragranced options", "Clean-burning wax", "Perfect for styling and gifting"],
  },
  {
    id: "oud-candle",
    categoryId: "scented-candles",
    name: "Rose & Oud Hand-Poured Candle",
    tagline: "The scent of heritage, poured with intention",
    description: "Encased in an elegant dark glass vessel, this candle offers a deeply intoxicating blend of rich damask rose and smoky, resinous oud wood. It is the olfactory equivalent of a velvet tapestry—warm, mysterious, and profoundly luxurious.",
    price: 2800,
    image: oudCandleImg,
    images: [oudCandleImg],
    features: ["Luxury dark glass vessel with gold branding", "Complex, multi-layered fragrance profile", "Crackling wooden wick", "Burn time: 60+ hours"],
  },

  // Vinyl Stickers
  {
    id: "calligraphy-occasion-stickers",
    categoryId: "vinyl-stickers",
    name: "Calligraphy Occasion Sticker Set",
    tagline: "Happy Birthday, Mom, Dad, Anniversary & more",
    description: "A beautiful curated set of premium calligraphy vinyl stickers featuring elegant cursive lettering — Happy Birthday, Anniversary, Love You, Mom, Dad, and more. Available in classic black or shimmering metallic gold finish. Perfect for personalising gift boxes, cake toppers, balloons, candles, and event décor.",
    price: 250,
    image: calligraphyStickersImg,
    images: [calligraphyStickersImg],
    features: ["Premium vinyl with strong adhesive", "Choice of black or metallic gold", "Set of 6 popular phrases", "Smooth peel-and-stick application"],
  },
  {
    id: "mubarak-arabic-stickers",
    categoryId: "vinyl-stickers",
    name: "Mubarak Arabic Calligraphy Stickers",
    tagline: "Elegant Arabic script for gifting & festive décor",
    description: "Beautifully crafted Arabic calligraphy 'Mubarak' (مبارک) vinyl stickers — perfect for Eid gift boxes, wedding favours, festive cards, candles, and home décor. Available in striking black or luxurious metallic gold. A meaningful touch of heritage on every gift.",
    price: 200,
    image: calligraphyStickersImg,
    images: [calligraphyStickersImg],
    features: ["Authentic Arabic calligraphy", "Black or metallic gold finish", "Pack of 5 stickers", "Waterproof & durable"],
  },
  {
    id: "custom-name-sticker",
    categoryId: "vinyl-stickers",
    name: "Custom Name & Logo Vinyl Sticker",
    tagline: "Your name, your brand — cut beautifully",
    description: "Commission a fully custom vinyl sticker cut to your design — your name, your logo, or your own calligraphy phrase. Perfect for small businesses, packaging branding, weddings, events, or personalised gifting. Available in any size, colour, and finish.",
    price: 350,
    image: calligraphyStickersImg,
    images: [calligraphyStickersImg],
    isCustom: true,
    features: ["Fully custom design", "Any size & colour", "Gloss, matte, or holographic finish", "Minimum order: 10 pieces"],
  },
  {
    id: "love-you-stickers",
    categoryId: "vinyl-stickers",
    name: "'Love You' Cursive Sticker Pack",
    tagline: "A little love, beautifully written",
    description: "Romantic 'Love You' cursive vinyl stickers in flowing calligraphy — ideal for Valentine's gifts, anniversary surprises, love notes, gift wrapping, and journal embellishments. Comes in a pack of 8 stickers in classic black and shimmering gold combinations.",
    price: 220,
    image: calligraphyStickersImg,
    images: [calligraphyStickersImg],
    features: ["Set of 8 stickers", "Black & gold finishes", "Premium glossy vinyl", "Strong long-lasting adhesive"],
  },

  // Creator's Studio
  {
    id: "silicone-molds",
    categoryId: "creators-studio",
    name: "Artisan Silicone Mold Collection",
    tagline: "Shape your masterpiece from the very beginning",
    description: "Professional-grade, translucent silicone molds designed for flawless resin casting. Featuring sharp edges, smooth interiors for a glass-like finish, and unique architectural shapes, this collection is the foundation of high-end resin artistry.",
    price: 3200,
    image: heroImg,
    images: [heroImg],
    features: ["Platinum-cure silicone", "Tear-resistant and durable", "Mirror-finish interior", "Includes 5 unique shapes"],
  },
  {
    id: "resin-kit",
    categoryId: "creators-studio",
    name: "UV Resin Starter Kit",
    tagline: "The curated toolkit for the discerning creator",
    description: "Everything a budding artisan needs to begin their journey in luxury crafting. Housed in beautiful minimalist packaging, this kit includes premium UV resin, precision tools, and a selection of delicate inclusions, assembled with the same care as our finished artworks.",
    price: 4500,
    image: heroImg,
    images: [heroImg],
    features: ["Crystal-clear, non-yellowing UV resin", "Precision brass tweezers and mixing tools", "Curated selection of gold leaf and dried botanicals", "Curing lamp included"],
  },

  // Textured Art
  {
    id: "peacock-panel",
    categoryId: "textured-art",
    name: "Peacock Bead-Work Panel",
    tagline: "Where Pakistan's heritage shines in every bead",
    description: "A breathtaking, dimensional masterpiece that pays homage to traditional Pakistani craftsmanship. Thousands of beads and crystals in rich emerald, sapphire, and gold are meticulously hand-applied to create the majestic form of a peacock, resulting in an artwork that shimmers and shifts with the light.",
    price: 35000,
    image: peacockImg,
    images: [peacockImg],
    features: ["Hand-applied beadwork and crystals", "Premium velvet backing", "Custom framing available", "Certificate of Authenticity"],
  },
  {
    id: "floral-canvas",
    categoryId: "textured-art",
    name: "Floral Dimensional Canvas",
    tagline: "Touch the story of nature's most intimate moments",
    description: "A heavily textured 3D art piece featuring sculptured petals emerging from a deep charcoal background. This monochromatic and gold-accented canvas invites touch and casts dynamic shadows, making it a living piece of art that changes throughout the day.",
    price: 25000,
    image: peacockImg,
    images: [peacockImg],
    features: ["Sculptural impasto technique", "Metallic gold leaf accents", "Gallery-wrapped canvas", "Ready to hang"],
  },
  {
    id: "geometric-frame",
    categoryId: "textured-art",
    name: "Geometric Crystalline Frame",
    tagline: "Precision and sparkle, married in three dimensions",
    description: "An intricate fusion of rigid geometry and organic sparkle. This textured frame uses faceted crystals and raised beadwork to create a mesmerizing border for mirrors or central artworks. It is an architectural jewel for your wall.",
    price: 28000,
    image: peacockImg,
    images: [peacockImg],
    features: ["Architectural 3D design", "Precision-cut glass crystals", "Satin black wood frame", "Museum-quality presentation"],
  },
];
