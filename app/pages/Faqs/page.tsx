"use client";

import Image from "next/image";
import pageElem1 from "@/public/page-elm-1.png";
import pageElem2 from "@/public/page-elm-2.png";
import pageElem3 from "@/public/page-elm-3.png";
import pageElem4 from "@/public/page-elm-4.png";

import brand1 from "@/public/brand-icon-1.png";
import brand2 from "@/public/brand-icon-2.png";
import brand3 from "@/public/brand-icon-3.png";
import brand4 from "@/public/brand-icon-4.png";
import brand5 from "@/public/brand-icon-5.png";

import { useState } from "react";
import Banner from "../Index/Banner/page";

const faqs = [
  {
    question: "How often are new podcast episodes released?",
    answer:
      "New episodes are typically released weekly. Release schedules may vary by show, so subscribing is the best way to stay updated.",
  },
  {
    question: "Where can I listen to The Tax Room podcasts?",
    answer:
      "You can listen directly on The Tax Room website or on popular platforms like Spotify, Apple Podcasts, and Google Podcasts.",
  },
  {
    question: "Can I suggest topics or guests for future episodes?",
    answer:
      "Yes! We welcome listener suggestions. You can share your ideas through our contact page or reach out to us on social media.",
  },
  {
    question: "Do you offer early access or exclusive content?",
    answer:
      "The Tax Room offers early access, bonus episodes, and exclusive content for premium members. Visit our membership page for more details.",
  },
  {
    question: "How can I download episodes for offline listening?",
    answer:
      "Most podcast platforms allow you to download episodes directly within their apps for offline listening.",
  },
  {
    question: "Is The Tax Room free to listen to?",
    answer:
      "Yes, all regular The Tax Room episodes are free to listen to. Premium features are optional and available through subscription.",
  },
  {
    question: "How do I leave a review or provide feedback?",
    answer:
      "You can leave a review on your preferred podcast platform or send us feedback directly through our website.",
  },
  {
    question: "Do you accept listener questions for the podcast?",
    answer:
      "Absolutely! Listener questions may be featured in future episodes. Submit your questions via our contact form or social channels.",
  },
  {
    question: "How can I contact The Tax Room team?",
    answer:
      "You can reach us through the contact page on our website or by connecting with us on our official social media accounts.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Page Section  */}
      <div className="page-section">
        <Image src={pageElem2} alt="Element" className="elm2 element" />
        <Image src={pageElem3} alt="Element" className="elm3 element" />
        <Image src={pageElem4} alt="Element" className="elm4 element" />

        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={pageElem1} alt="Element" className="w-full h-full" />

          <h1 className="text-6xl lg:text-8xl font-semibold my-6">
            FAQ<span className="text-(--primary)">'s</span>{" "}
          </h1>

          <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
            <Image src={brand1} alt="brand" />
            <Image src={brand2} alt="brand" />
            <Image src={brand3} alt="brand" />
            <Image src={brand4} alt="brand" />
            <Image src={brand5} alt="brand" />
          </div>
        </div>
      </div>

      <div className="dark-section">
        <div className="px-[8%] lg:px-[16%] py-40 pt-30 pb-20">
          <div className="title flex flex-col items-center justify-center">
            <div>
              <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                <i className="bi bi-rocket-takeoff pe-4"></i>FAQs
              </h2>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold mt-7 mb-5">
              Frequently Asked Questions
            </h1>
            <p className="tracking-wider text-start md:text-center lg:w-[70%]">
              FAQs are widely used on websites, in product manuals, and in
              various instructional documents to address frequently asked
              questions by users or customers.
            </p>
          </div>

          {/* Faqs  */}
          <div className="bg-(--gray-color) p-5 rounded-2xl mt-15">
            <div className="border border-dashed border-(--primary) mt-3 mb-5 opacity-30"></div>
            {/* Faq content */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-xl p-4 transition-all duration-500 ease-in-out ${
                      isOpen ? "bg-(--primary) text-black" : "bg-(--gray-light)"
                    }`}
                  >
                    <div
                      className={`flex justify-between items-center cursor-pointer pb-3 transition-all duration-300 ${
                        isOpen ? "border-b border-dashed border-black/40" : ""
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-md md:text-xl font-medium">
                        {faq.question}
                      </h3>

                      {/* Icon  */}
                      <span
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-black text-(--primary)"
                            : "bg-(--primary) text-black"
                        }`}
                      >
                        <i
                          className={`bi ${
                            isOpen ? "bi-dash-lg" : "bi-plus-lg"
                          } text-xl`}
                        ></i>
                      </span>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-40 mt-3 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border border-dashed border-(--prim) mt-5 opacity-30"></div>
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}
