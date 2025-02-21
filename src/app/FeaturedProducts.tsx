"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  Heart,
  Truck,
  CreditCard,
  Headphones,
  IndianRupee,
  Plus,
  Minus,
} from "lucide-react";
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

export default function FeaturedProducts() {
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
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 4);

  const addToCart = (productId: number) => {
    setCart((prevCart) => [...prevCart, { id: productId, quantity: 1 }]);
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getProductQuantity = (productId: number) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <>
      <section className="py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-center sm:text-left">
              Featured Products
            </h2>
            <Button
              className="bg-teal-500 px-6 sm:px-10 py-2 sm:py-3 hover:bg-teal-600 text-white mt-4 sm:mt-0"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All"}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-md overflow-hidden bg-white transition hover:shadow-lg flex flex-col"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-48 sm:h-56 object-contain bg-gray-100 p-4"
                  />
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {product.rating.rate}
                  </div>
                  <button className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white p-2 rounded-full shadow hover:bg-gray-200">
                    <Heart className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="p-4 flex-grow">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-2">
                    <span className="text-green-600 font-bold">
                      Rs. {product.price}
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      Rs. {(product.price * 1.5).toFixed(0)}
                    </span>
                    <span className="text-red-500 text-sm ml-2">(30% off)</span>
                  </div>
                </div>

                <div className="p-4">
                  {getProductQuantity(product.id) > 0 ? (
                    <div className="flex items-center justify-center gap-3 bg-teal-500 text-white px-3 py-1 rounded-md w-full mx-auto">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-teal-500 hover:text-white"
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            getProductQuantity(product.id) - 1
                          )
                        }
                      >
                        <Minus size={20} />
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
                        <Plus size={20} />
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
      </section>

      <div className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto py-12 px-4">
          <div className="flex items-center gap-3 lg:border-r pr-4 sm:pr-6">
            <Truck className="w-6 h-6 text-gray-700" />
            <div className="text-left">
              <p className="font-semibold">Free Shipping</p>
              <p className="text-sm text-gray-500">
                Above all Orders over 200rs.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:border-r pr-4 sm:pr-6">
            <IndianRupee className="w-6 h-6 text-gray-700" />
            <div className="text-left">
              <p className="font-semibold">Money Guarantee</p>
              <p className="text-sm text-gray-500">45 Days for Exchange</p>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:border-r pr-4 sm:pr-6">
            <Headphones className="w-6 h-6 text-gray-700" />
            <div className="text-left">
              <p className="font-semibold">Online Support</p>
              <p className="text-sm text-gray-500">24/7 Customer Care</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-gray-700" />
            <div className="text-left">
              <p className="font-semibold">Flexible Payment</p>
              <p className="text-sm text-gray-500">
                Pay with multiple Credit Cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
