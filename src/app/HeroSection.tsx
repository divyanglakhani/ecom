"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import herocarousel01 from "../../public/img/hero-carousel01.jpeg";
import herocarousel02 from "../../public/img/hero-carousel01.jpeg";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-full bg-gray-50 py-10 px-6 md:px-16">
      <div className="w-full md:w-1/2 px-4 md:px-16 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Lorem ipsum dolor sit.
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing
          pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin
          in dictumst elementum amet nulla.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-center md:items-start">
          <Button
            variant="outline"
            className="border-teal-500 text-teal-500 hover:bg-teal-100 px-8 md:px-12 hover:text-teal-500 w-full md:w-auto"
          >
            Explore
          </Button>
          <Button className="bg-teal-500 text-white hover:bg-teal-600 px-8 md:px-12 w-full md:w-auto">
            Buy Now
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <Carousel className="relative w-full max-w-[400px] md:max-w-[600px]">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={herocarousel01}
                alt="Shoe"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={herocarousel02}
                alt="Shoe"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </CarouselItem>
          </CarouselContent>

          <div className="absolute bottom-6 right-14 flex !gap-1">
            <CarouselPrevious className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full" />
            <CarouselNext className="bg-teal-500 hover:bg-teal-600 p-2 rounded-full text-black" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
