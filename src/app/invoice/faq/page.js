"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do I get free updates?",
    answer:
      "Yes, all updates are free for the lifetime of the product. You'll receive them automatically.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support via our contact form or by emailing support@example.com.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8 w-full mx-auto">
      <h2 className="text-center mt-3 text-gray-800 text-2xl font-bold mb-6">
        FAQs Page
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl shadow-sm transition-all"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-2 bg-white hover:bg-gray-50 rounded-2xl transition-colors duration-200 text-gray-500 border border-b-0 border-gray-200"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              <span className="text-gray-600 bg-gray-100 rounded-full p-5">
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 mt-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
