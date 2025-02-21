"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Floyd Miles",
    image: "/img/reviews/customer-reviews01.png",
    rating: 4,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exerciation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Ronald Richards",
    image: "/img/reviews/customer-reviews02.png",
    rating: 5,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exerciation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Savannah Nguyen",
    image: "/img/reviews/customer-reviews03.png",
    rating: 4,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exerciation veniam consequat sunt nostrud amet.",
  },
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
        Customers Review
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-4 sm:flex-col md:flex-row">
        {reviews.map((review, index) => (
          <Card
            key={review.name}
            className={cn(
              "relative w-full max-w-xs sm:max-w-full md:max-w-md lg:max-w-xs border rounded-lg shadow-md transition-all p-6 flex flex-col items-center",
              activeIndex === index
                ? "scale-105 border-gray-500"
                : "border-gray-200"
            )}
          >
            <div className="flex justify-between w-full items-start">
              <div className="w-16 h-16 rounded-md">
                <Image
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover rounded-md"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex justify-end space-x-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5",
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    )}
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>

            <CardContent className="mt-8 p-0 text-left  sm:mt-4">
              <h3 className="font-semibold text-lg mb-4 text-[#1E293B]">
                {review.name}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                {review.review}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-6">
        {reviews.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-3 w-3 rounded-full bg-[#334155] cursor-pointer transition-all",
              activeIndex === index && "bg-[#99F6E4] scale-125"
            )}
          />
        ))}
      </div>
    </div>
  );
}
