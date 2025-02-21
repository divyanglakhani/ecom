"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PromoBanner() {
  return (
    <section className="flex justify-center items-center bg-[#F0FDFA] py-12 px-4 sm:px-6">
      <div className="relative w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div
          className="relative flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-center px-6 sm:px-12 py-10 rounded-xl md:h-96"
          style={{
            backgroundImage: "url('/img/image 1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-md md:max-w-lg text-white z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Lorem ipsum <br /> dolor sit.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing
              pellentesque feugiat gravida tincidunt lobortis mi. Nisi
              sollicitudin in dictumst elementum amet nulla.
            </p>
            <Button className="mt-6 bg-white hover:bg-gray-200 text-teal-500 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold shadow-md">
              Buy Now
            </Button>
          </div>

          <div className="absolute top-3 right-3 sm:top-6 sm:right-12 w-16 sm:w-24 md:w-32">
            <Image
              src="/img/offdiscount.png"
              alt="60% Off"
              width={300}
              height={100}
              className="w-full"
            />
          </div>

          <div className="absolute bottom-[-10px] sm:bottom-0 right-1/2 translate-x-1/2 sm:right-8 sm:translate-x-0 w-28 sm:w-44 md:w-[380px] md:drop-shadow-lg md:right-44">
            <Image
              src="/img/happy-lady-stylish-skirt-boater-posing-pink-wall_197531-23653 1.png"
              alt="Fashion Models"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
