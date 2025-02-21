"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer viverra fermentum turpis tellus. Condimentum integer elementum euismod ultrices vulputate vitae amet tincidunt. Sed lorem facilisis ultricies euismod in. Cras imperdiet pellentesque facilisis at. Iaculis tellus vitae enim velit. Totor quis in ipsum amet nam lacus.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer viverra fermentum turpis tellus. Condimentum integer elementum euismod ultrices vulputate vitae amet tincidunt. Sed lorem facilisis ultricies euismod in. Cras imperdiet pellentesque facilisis at. Iaculis tellus vitae enim velit. Totor quis in ipsum amet nam lacus.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer viverra fermentum turpis tellus. Condimentum integer elementum euismod ultrices vulputate vitae amet tincidunt. Sed lorem facilisis ultricies euismod in. Cras imperdiet pellentesque facilisis at. Iaculis tellus vitae enim velit. Totor quis in ipsum amet nam lacus.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer viverra fermentum turpis tellus. Condimentum integer elementum euismod ultrices vulputate vitae amet tincidunt. Sed lorem facilisis ultricies euismod in. Cras imperdiet pellentesque facilisis at. Iaculis tellus vitae enim velit. Totor quis in ipsum amet nam lacus.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<null | number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
          FAQ
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full bg-white text-left p-3 flex justify-between items-center font-semibold text-sm md:text-base"
                onClick={() => toggleFAQ(index)}
              >
                <span>
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus
                    size={20}
                    className="w-4 h-4 md:w-5 md:h-5 text-teal-500"
                  />
                ) : (
                  <Plus
                    size={20}
                    className="w-4 h-4 md:w-5 md:h-5 text-teal-500"
                  />
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 text-xs md:text-sm p-3">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
