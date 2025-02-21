"use client";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center space-x-2 mb-8">
          <div className="rounded-full">
            <Image
              src="/img/footerlogo.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </div>
          <span className="text-xl font-semibold">Logo</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-4 sm:px-6 md:px-8">
        <div>
          <h3 className="text-teal-400 font-semibold mb-2">Contact us</h3>
          <p className="mb-2">Logo@gmail.com</p>
          <p>+91 12345 67890</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Nulla tempus elit nec.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebook className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold mb-2">Products Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Auctor volutpat.</li>
            <li>Fermentum turpis.</li>
            <li>Mi consequat.</li>
            <li>Amet venenatis.</li>
            <li>Convallis porttitor.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Egestas vitae.</li>
            <li>Viverra lorem ac.</li>
            <li>Eget ac tellus.</li>
            <li>Erat nulla.</li>
            <li>Vulputate proin.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold mb-2">Legal Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Egestas vitae.</li>
            <li>Viverra lorem ac.</li>
            <li>Eget ac tellus.</li>
            <li>Erat nulla.</li>
            <li>Vulputate proin.</li>
          </ul>
        </div>

        <div className="flex flex-col items-start p-0 rounded-lg">
          <h2 className="text-teal-400 text-lg font-semibold mb-4">
            Get the app
          </h2>
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="bg-[#94A3B8] !text-[#1E293B] hover:bg-[#94A3B8] hover:text-[#1E293B] flex gap-2 px-6 sm:px-8 py-5 sm:py-7 rounded-lg border-none w-full sm:w-auto"
            >
              <Image
                src="/img/application/appstore.svg"
                alt="Apple Logo"
                width={20}
                height={20}
              />
              <div className="flex flex-col items-start">
                <span className="text-xs">Download on the</span>
                <span className="text-lg font-bold">App Store</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className="bg-[#94A3B8] text-[#1E293B] hover:bg-[#94A3B8] hover:text-[#1E293B] flex gap-2 px-6 sm:px-8 py-5 sm:py-7 rounded-lg border-none w-full sm:w-auto"
            >
              <Image
                src="/img/application/googleplay.svg"
                alt="Google Play Logo"
                width={20}
                height={20}
              />
              <div className="flex flex-col items-start">
                <span className="text-xs">GET IT ON</span>
                <span className="text-lg font-bold">Google Play</span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4 px-4 sm:px-6 md:px-8">
        Copyright &copy; 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
