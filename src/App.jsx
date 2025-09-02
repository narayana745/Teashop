import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const menuItems = [
  { id: 1, name: "Cutting Chai", price: 15, desc: "Strong & fresh masala tea" },
  { id: 2, name: "Masala Chai", price: 20, desc: "Cardamom-ginger blend" },
  { id: 3, name: "Ginger Tea", price: 22, desc: "Extra ginger kick" },
  { id: 4, name: "Elaichi Tea", price: 22, desc: "Aromatic cardamom" },
  { id: 5, name: "Lemon Tea", price: 25, desc: "Light & refreshing" },
  { id: 6, name: "Green Tea", price: 30, desc: "Classic green" },
  { id: 7, name: "Sulaimani", price: 28, desc: "Black tea with spices" },
  { id: 8, name: "Badam Milk (Hot)", price: 45, desc: "Almond, saffron hint" },
  { id: 9, name: "Bun Maska", price: 25, desc: "Buttered bun" },
  { id: 10, name: "Egg Puff", price: 30, desc: "Baked savoury puff" },
  { id: 11, name: "Veg Puff", price: 28, desc: "Flaky veg filling" },
];

export default function TeaShopApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const sendWhatsAppOrder = () => {
    const orderText = cart
      .map((item, idx) => `${idx + 1}. ${item.name} - ₹${item.price}`)
      .join("%0A");
    const message = `Hello, I would like to order:%0A${orderText}%0A---%0ATotal: ₹${total}`;
    const phone = "91XXXXXXXXXX"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phone}?text=${message}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">☕ My Tea Shop</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <Card key={item.id} className="shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-500 text-sm">{item.desc}</p>
              <p className="mt-2 font-bold">₹{item.price}</p>
              <Button
                className="mt-3 w-full"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart Section */}
      <div className="fixed bottom-4 right-4">
        <Button
          className="rounded-full p-4 shadow-xl flex items-center"
          onClick={sendWhatsAppOrder}
          disabled={cart.length === 0}
        >
          <ShoppingCart className="mr-2" /> {cart.length} | ₹{total}
        </Button>
      </div>
    </div>
  );
        }
