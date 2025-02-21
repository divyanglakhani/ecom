"use client";

import Image from "next/image";

export default function PopularBrands() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Popular Brands
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center opacity-100">
        <Image
          src="/img/Popular-brand/Mask group-1.png"
          alt="Brand 1"
          width={120}
          height={60}
          className="mx-auto"
        />
        <Image
          src="/img/Popular-brand/Mask group-2.png"
          alt="Brand 2"
          width={120}
          height={60}
          className="mx-auto"
        />
        <Image
          src="/img/Popular-brand/Mask group-3.png"
          alt="Brand 3"
          width={120}
          height={60}
          className="mx-auto"
        />
        <Image
          src="/img/Popular-brand/Mask group-4.png"
          alt="Brand 4"
          width={120}
          height={60}
          className="mx-auto"
        />
        <Image
          src="/img/Popular-brand/Mask group-5.png"
          alt="Brand 5"
          width={120}
          height={60}
          className="mx-auto"
        />

        <Image
          src="/img/Popular-brand/Mask group-7.png"
          alt="Brand 7"
          width={120}
          height={60}
          className="mx-auto"
        />
        <Image
          src="/img/Popular-brand/Mask group.png"
          alt="Brand 6"
          width={120}
          height={60}
          className="mx-auto"
        />
        <Image
          src="/img/Popular-brand/Mask group-6.png"
          alt="Brand 6"
          width={120}
          height={60}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
