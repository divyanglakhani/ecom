"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();

    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const displayedProducts = showAll ? products : products.slice(8, 16);

  const addToCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      let updatedCart;

      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { id: productId, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart =
        newQuantity > 0
          ? prevCart.map((item) =>
              item.id === productId ? { ...item, quantity: newQuantity } : item
            )
          : prevCart.filter((item) => item.id !== productId);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const getProductQuantity = (productId: number) => {
    return cart.find((item) => item.id === productId)?.quantity || 0;
  };

  return (
    <section className="py-12 bg-[#F8FAFC] px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Most Popular Products</h2>
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-3 mt-4 sm:mt-0"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-md bg-white transition hover:shadow-lg flex flex-col"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-56 object-contain bg-gray-100 p-4"
                  />
                  <div className="absolute bottom-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {product.rating.rate}
                  </div>
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-200">
                    <Heart className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="p-4 flex-grow">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <div className="mt-2">
                    <span className="text-green-600 font-bold">
                      Rs. {product.price}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  {getProductQuantity(product.id) > 0 ? (
                    <div className="flex items-center justify-center gap-3 bg-teal-500 text-white px-3 py-1 rounded-md w-full mx-auto">
                      <Button
                        variant="ghost"
                        size="icon"
                        className=" text-white hover:bg-teal-500 hover:text-white"
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            getProductQuantity(product.id) - 1
                          )
                        }
                      >
                        <Minus size={20} className="w-5 h-5" />
                      </Button>
                      <span className="text-lg font-medium min-w-[20px] text-center">
                        {getProductQuantity(product.id)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-teal-500 hover:text-white"
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            getProductQuantity(product.id) + 1
                          )
                        }
                      >
                        <Plus size={20} className="w-5 h-5" />
                      </Button>
                    </div>
                  ) : (
                    <button
                      className="w-full bg-teal-500 text-white py-2 rounded-md font-semibold hover:bg-teal-600"
                      onClick={() => addToCart(product.id)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
