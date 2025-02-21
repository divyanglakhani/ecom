"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartProduct {
  productId: number;
  quantity: number;
}

interface CartData {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}

const Cart = () => {
  const [, setCartCount] = useState<number>(0);

  const [cartItems, setCartItems] = useState<
    {
      id: number;
      name: string;
      price: number;
      image: string;
      quantity: number;
    }[]
  >([]);
  const userId = 1;

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const cartResponse = await fetch("https://fakestoreapi.com/carts");
        const cartData: CartData[] = await cartResponse.json();
        console.log("Full Cart Data:", cartData);

        const userCart = cartData.find((cart) => cart.userId === userId);
        if (!userCart) {
          console.log("No cart found for this user.");
          return;
        }

        console.log("User's Cart:", userCart);

        const productResponse = await fetch(
          "https://fakestoreapi.com/products"
        );
        const productData: Product[] = await productResponse.json();
        console.log("All Products:", productData);

        const enrichedCartItems = userCart.products
          .map((cartItem) => {
            const product = productData.find(
              (p) => p.id === cartItem.productId
            );
            if (!product) {
              console.log(`Product not found for ID: ${cartItem.productId}`);
              return undefined;
            }
            return {
              id: product.id,
              name: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            };
          })
          .filter(
            (item): item is NonNullable<typeof item> => item !== undefined
          )
          .slice(0, 2);

        console.log("Final Cart Items:", enrichedCartItems);

        setCartItems(enrichedCartItems);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("storage"));

      setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
      return updatedCart;
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("storage"));

      setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
      return updatedCart;
    });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const grandTotal = subtotal + shipping;

  return (
    <div className="mx-auto   ">
      <div className="bg-teal-50 hidden md:block">
        <div className=" md:text-sm grid grid-cols-7 mx-16 p-4 rounded-t-md text-gray-700 font-semibold text-sm">
          <span className="col-span-2">PRODUCT DETAILS</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
          <span>SHIPPING</span>
          <span>SUBTOTAL</span>
          <span>ACTION</span>
        </div>
      </div>

      {cartItems.slice(0, 2).map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-2 md:grid-cols-7 items-center gap-4 mx-4 sm:mx-6 md:mx-16 py-4 text-gray-800 "
        >
          <div className="col-span-2 flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <p className="font-medium text-sm sm:text-base">{item.name}</p>
            </div>
          </div>

          <p className="hidden md:block text-gray-700">
            Rs.{item.price.toFixed(2)}
          </p>

          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-[12px] w-fit">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700"
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <span className="text-lg font-medium min-w-[20px] text-center">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700"
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>

          <p className="hidden md:block text-gray-500">FREE</p>

          <p className="text-gray-700 md:block hidden">
            Rs.{(item.price * item.quantity).toFixed(2)}
          </p>

          <Button
            variant="ghost"
            size="icon"
            className="text-teal-500"
            onClick={() => handleRemoveItem(item.id)}
          >
            <Trash className="w-5 h-5" />
          </Button>

          <div className="col-span-2 flex md:hidden flex-col gap-1 text-gray-700">
            <p className="text-sm">Price: Rs.{item.price.toFixed(2)}</p>
            <p className="text-sm font-medium">
              Subtotal: Rs.{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 bg-[#F8FAFC]">
        <div className="bg-[#F8FAFC] p-4 md:p-6 w-full md:w-1/2">
          <h2 className="text-lg font-semibold">Discount Codes</h2>
          <p className="text-gray-500 text-sm mb-4">
            Enter your coupon code if you have one
          </p>

          <div className=" flex lg:w-2/3 border border-gray-300 rounded-md overflow-hidden mb-4">
            <input
              type="text"
              className="flex-1 px-4 w-1/2  py-2 border-none focus:ring-0 focus:outline-none "
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 md:px-6 py-2">
              Apply Coupon
            </button>
          </div>

          <button className="lg:w-48 md:w-1/2 border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-100">
            Continue Shopping
          </button>
        </div>

        <div className="bg-teal-50 p-4 md:p-6 rounded-lg shadow-md w-full md:w-1/3">
          <div className="space-y-3 text-gray-700 border-b pb-3 border-black">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span className="font-semibold">Rs.{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b-2 border-teal-500 border-dotted pb-2">
              <span>Shipping</span>
              <span className="font-semibold">Rs.{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2 text-lg font-semibold">
              <span>Grand Total</span>
              <span>Rs.{grandTotal.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-4 lg:mx-10 md:mx-10 text-center">
            <button className=" bg-teal-500  px-5 hover:bg-teal-600 text-white py-2 rounded-md">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
