import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CartItem {
  id: number;
  quantity: number;
}

export const updateCart = (
  productId: number,
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
  setCart((prevCart: CartItem[]) => {
    const existingItem = prevCart.find((item) => item.id === productId);
    let updatedCart: CartItem[];

    if (existingItem) {
      updatedCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...prevCart, { id: productId, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setTimeout(() => {
      window.dispatchEvent(new Event("cartUpdated"));
    }, 0);

    return updatedCart;
  });
};
