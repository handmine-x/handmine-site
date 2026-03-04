import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function HandMineWebsite() {
  const [lang, setLang] = useState("ar");

  const text = {
    ar: {
      brand: "HandMINE",
      welcome: "مرحبا بكم في HandMINE",
      hero: "منتجات يدوية صديقة للبيئة",
      view: "مشاهدة",
      add: "أضف إلى السلة",
      desc: "قطعة ديكور مصنوعة يدوياً بخيوط وزليج طبيعي.",
      cart: "السلة",
      whatsapp: "اطلب عبر واتساب",
    },
    fr: {
      brand: "HandMINE",
      welcome: "Bienvenue chez HandMINE",
      hero: "Produits artisanaux écologiques",
      view: "Voir",
      add: "Ajouter au panier",
      desc: "Décoration faite main avec fils et zellige naturel.",
      cart: "Panier",
      whatsapp: "Commander sur WhatsApp",
    },
    en: {
      brand: "HandMINE",
      welcome: "Welcome to HandMINE",
      hero: "Eco-friendly handmade products",
      view: "View",
      add: "Add to cart",
      desc: "Handmade decor with threads and natural zellige.",
      cart: "Cart",
      whatsapp: "Order via WhatsApp",
    },
  };

  const t = text[lang];

  const whatsappNumber = "212642400226"; // رقم واتساب الخاص بك بالصيغة الدولية بدون +

  const products = [
    { id: 1, name: "لوحة خيوط", desc: t.desc, image: "/images/product1.jpg" },
    { id: 2, name: "زليج طبيعي", desc: t.desc, image: "/images/product2.jpg" },
    { id: 3, name: "تريات خرزية", desc: t.desc, image: "/images/product3.jpg" },
    // يمكنك إضافة حتى 20 منتج هنا لاحقاً
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">{t.brand}</h1>

        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setLang("ar")}>AR</Button>
          <Button variant="outline" onClick={() => setLang("fr")}>FR</Button>
          <Button variant="outline" onClick={() => setLang("en")}>EN</Button>
        </div>
      </header>

      {/* Welcome */}
      <section className="text-center py-10 px-4">
        <h2 className="text-3xl font-bold mb-2">{t.welcome}</h2>
        <p className="text-gray-500">{t.hero}</p>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="rounded-2xl">
              <CardContent className="p-4">
                <div className="h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-xl"/>
                </div>

                <div className="text-sm text-gray-600 mb-2">{product.desc}</div>

                <Button
                  size="sm"
                  className="flex gap-1 w-full"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=مرحبا! أريد طلب ${product.name}`,
                      "_blank"
                    )
                  }
                >
                  {t.whatsapp}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        className="fixed bottom-4 right-4 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center text-white shadow-lg"
      >
        WA
      </a>

      {/* Footer */}
      <footer className="text-center py-6 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} HandMINE
      </footer>
    </div>
  );
}