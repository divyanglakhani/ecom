import { Card } from "@/components/ui/card";
import Image from "next/image";

const CategoriesSection = () => {
  const categories = [
    { name: "Men", src: "/img/categories/categories-men.png" },
    { name: "Women", src: "/img/categories/categories-women.png" },
    { name: "Kids", src: "/img/categories/categories-kids.png" },
    { name: "Cosmetics", src: "/img/categories/categories-Cosmetics.png" },
    { name: "Accessories", src: "/img/categories/categories-accessories.png" },
    { name: "Home", src: "/img/categories/categories-home.png" },
    { name: "Footwears", src: "/img/categories/categories-footwears.png" },
    { name: "Sports", src: "/img/categories/categories-sports.png" },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center gap-6 lg:gap-12">
          <Card className="py-6 px-12 sm:px-20 lg:px-28 text-center shadow-none border-none rounded-lg bg-gray-100">
            <h3 className="text-2xl sm:text-3xl font-semibold">95%</h3>
            <p className="text-base sm:text-lg text-gray-600">Happy Customer</p>
          </Card>
          <Card className="py-6 px-12 sm:px-20 lg:px-28 text-center shadow-none border-none rounded-lg bg-gray-100">
            <h3 className="text-2xl sm:text-3xl font-semibold">1 Million+</h3>
            <p className="text-base sm:text-lg text-gray-600">Yearly Sale</p>
          </Card>
          <Card className="py-6 px-12 sm:px-20 lg:px-28 text-center shadow-none border-none rounded-lg bg-gray-100">
            <h3 className="text-2xl sm:text-3xl font-semibold">20k+</h3>
            <p className="text-base sm:text-lg text-gray-600">
              Customer Rating
            </p>
          </Card>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 sm:mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
          Categories
        </h2>
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-6 place-items-center">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 sm:w-28 h-14 rounded-full flex items-center justify-center">
                <Image
                  src={category.src}
                  alt={category.name}
                  width={80}
                  height={80}
                  className="sm:w-[100px] sm:h-[100px]"
                />
              </div>
              <p className="mt-6 sm:mt-12 text-gray-700 font-bold text-sm sm:text-base">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
