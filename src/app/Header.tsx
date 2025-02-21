"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "../../public/img/logo.png";
type CartItem = {
  quantity: number;
};

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState<number>(2);
  const [isClient] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        const totalItems = parsedCart.reduce(
          (sum: number, item: CartItem) => sum + item.quantity,
          0
        );
        setCartCount(totalItems);
      } else {
        setCartCount(2);
      }
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const goToCart = () => {
    router.push("/cart");
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <header className="bg-white  fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div
          onClick={goToHome}
          className="flex cursor-pointer items-center gap-2 text-teal-500 font-bold text-xl"
        >
          <Image src={logo} alt="Logo" width={27} height={24} />{" "}
          <span>Logo</span>
        </div>
        <div className="flex gap-16">
          <div className="hidden md:flex gap-16">
            {isClient && (
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-0 text-gray-800">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="relative flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 data-[state=open]:bg-gray-100"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="relative flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 data-[state=open]:bg-gray-100">
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white shadow-md rounded-md">
                      <ul className="flex flex-col gap-2 p-2">
                        <li>
                          <NavigationMenuLink
                            href="#"
                            className="block px-4 py-2 rounded-md transition-colors hover:bg-gray-100"
                          >
                            Electronics
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#"
                            className="block px-4 py-2 rounded-md transition-colors hover:bg-gray-100"
                          >
                            Fashion
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#"
                            className="block px-4 py-2 rounded-md transition-colors hover:bg-gray-100"
                          >
                            Home & Kitchen
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#"
                            className="block px-4 py-2 rounded-md transition-colors hover:bg-gray-100"
                          >
                            Sports & Outdoors
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="relative flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 data-[state=open]:bg-gray-100"
                    >
                      Explore
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="relative flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 data-[state=open]:bg-gray-100"
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="relative flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 data-[state=open]:bg-gray-100"
                    >
                      Blog
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#"
                      className="relative flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 data-[state=open]:bg-gray-100"
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg bg-gray-100 text-[#64748B]"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg bg-gray-100 text-[#64748B]"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              onClick={goToCart}
              variant="ghost"
              size="icon"
              className={`relative rounded-lg text-[#64748B] ${
                pathname === "/cart"
                  ? "bg-teal-500 text-white hover:bg-teal-500 hover:text-white"
                  : "bg-gray-100"
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t shadow-md p-4 space-y-4">
          <a
            href="#"
            className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
          >
            Home
          </a>

          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="flex items-center gap-2 w-full text-left text-gray-800 hover:bg-gray-100 p-2 rounded-md"
          >
            Categories
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isCategoriesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isCategoriesOpen && (
            <ul className="pl-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
                >
                  Home & Kitchen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
                >
                  Sports & Outdoors
                </a>
              </li>
            </ul>
          )}

          <a
            href="#"
            className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
          >
            Explore
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
          >
            Blog
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-gray-100 p-2 rounded-md"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
