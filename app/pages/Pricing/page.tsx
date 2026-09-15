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

import musicWavesImg from "@/public/music-waves.png";
import { useState } from "react";
import Testimonial from "../Index/Testimonial/page";
import Banner from "../Index/Banner/page";

const faqLeft = [
  {
    question: "How often are new episodes released?",
    answer:
      "New episodes are released every week, ensuring fresh and engaging content for our listeners.",
  },
  {
    question: "Can I suggest topics or guests?",
    answer:
      "Yes! We love listener input. You can suggest topics or guests through our contact page or social platforms.",
  },
  {
    question: "Do you accept listener questions?",
    answer:
      "Absolutely. Listener questions are frequently featured and answered during our episodes.",
  },
  {
    question: "Can I download episodes for offline listening?",
    answer:
      "Yes, episodes can be downloaded on supported platforms for offline access.",
  },
  {
    question: "Which platforms support your podcast?",
    answer:
      "Our podcasts are available on all major streaming platforms including Spotify, Apple Podcasts, and more.",
  },
];

const faqRight = [
  {
    question: "Is there a way to get early access or exclusive content?",
    answer:
      "Yes. Premium subscribers get early access, bonus episodes, and exclusive behind-the-scenes content.",
  },
  {
    question: "What’s included in the Premium subscription?",
    answer:
      "Premium plans unlock ad-free listening, exclusive episodes, and unlimited access to all content.",
  },
  {
    question: "Can I cancel or change my subscription anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings.",
  },
  {
    question: "How do I leave a review or feedback?",
    answer:
      "You can leave reviews on your favorite podcast platform or send feedback directly through our website.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team through the contact page or via email for any assistance.",
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(null);
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null);

  const toggleLeft = (index: number) => {
    setOpenLeftIndex(openLeftIndex === index ? null : index);
  };

  const toggleRight = (index: number) => {
    setOpenRightIndex(openRightIndex === index ? null : index);
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
            Subscription <span className="text-(--primary)">Plan</span>{" "}
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
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="title text-center">
            <div>
              <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                <i className="bi bi-rocket-takeoff pe-4"></i>Pricing Plan
              </h2>
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold mt-7 mb-5">
              Flexible Pricing Options
            </h1>

            <div className="flex items-center justify-center gap-4">
              <span className={billing === "monthly" ? "text-white" : ""}>
                Monthly
              </span>

              <button
                onClick={() =>
                  setBilling(billing === "monthly" ? "yearly" : "monthly")
                }
                className="relative w-14 h-7 bg-(--gray-color) rounded-full"
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-(--primary) rounded-full transition-all duration-300 ${
                    billing === "yearly" ? "left-8" : "left-1"
                  }`}
                ></span>
              </button>

              <span className={billing === "yearly" ? "text-white" : ""}>
                Yearly <span className="text-(--primary)">(Save 30%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-15">
            <div className="bg-(--gray-light) px-6 py-6 rounded-xl">
              <div className="border-b border-dashed border-(--primary-light) pb-8">
                <h4 className="font-semibold text-xl mb-2">Free</h4>
                <div className="flex items-end gap-1 mb-5">
                  <h1 className="text-5xl text-(--primary) font-semibold">
                    0.00
                  </h1>

                  <span className="text-xl text-(--primary)">
                    /{billing === "monthly" ? "Mo" : "Yr"}
                  </span>
                </div>

                <p className="">
                  Discover great podcasts and explore fresh ideas at no cost.
                </p>
              </div>

              <ul className="space-y-3 list-none py-8">
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Latest free episodes
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Handpicked speakers
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Free content access
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Available on all platforms
                </li>

                <ul className="opacity-50 space-y-3 border-b border-dashed border-(--primary-light) pb-8">
                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                    Subscribe up to 20 channels
                  </li>
                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                    Unlimited free episodes
                  </li>
                </ul>
              </ul>

              <button className="btn btn1">
                Get Started Now <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>

            <div className="bg-(--gray-light) px-6 py-6 rounded-xl">
              <div className="border-b border-dashed border-(--primary-light) pb-8">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-xl mb-2">Premium</h4>
                  <Image
                    src={musicWavesImg}
                    alt="music-waves-img"
                    className="w-40"
                  />
                </div>

                <div className="flex items-end gap-1 mb-5">
                  <h1 className="text-5xl text-(--primary) font-semibold">
                    {billing === "monthly" ? "29.00" : "240.00"}
                  </h1>
                  <span className="text-xl text-(--primary)">
                    /{billing === "monthly" ? "Mo" : "Yr"}
                  </span>
                </div>

                <p className="">
                  Unlock premium podcasts and enjoy ad-free, uninterrupted
                  listening.
                </p>
              </div>

              <ul className="space-y-3 list-none py-8">
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Latest & premium episodes
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Curated expert speakers
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Full content access
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Available on all platforms
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Subscribe up to 20 channels
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Unlimited episodes
                </li>
              </ul>

              <div className="border-b border-dashed border-(--primary-light) opacity-50"></div>
              <button className="btn btn1 mt-8">
                Get Started Now <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>

            <div className="bg-(--gray-light) px-6 py-6 rounded-xl">
              <div className="border-b border-dashed border-(--primary-light) pb-8">
                <h4 className="font-semibold text-xl mb-2">Special</h4>
                <div className="flex items-end gap-1 mb-5">
                  <h1 className="text-5xl text-(--primary) font-semibold">
                    {billing === "monthly" ? "99.00" : "830.00"}
                  </h1>
                  <span className="text-xl text-(--primary)">
                    /{billing === "monthly" ? "Mo" : "Yr"}
                  </span>
                </div>
                <p className="">
                  The ultimate experience for true podcast enthusiasts and
                  creators.
                </p>
              </div>

              <ul className="space-y-3 list-none py-8">
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  All premium & exclusive episodes
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Top-tier curated hosts
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Complete content library
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Multi-platform access
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Subscribe up to 20 channels
                </li>
                <li className="flex gap-3 items-center">
                  <i className="bi bi-check-circle-fill text-(--primary) text-xl"></i>
                  Unlimited episodes
                </li>
              </ul>

              <div className="border-b border-dashed border-(--primary-light) opacity-50"></div>

              <button className="btn btn1 mt-8">
                Get Started Now <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="light-section wave-wrapper-section">
        <div className="px-[8%] lg:px-[16%] py-40 pt-50 pb-20 lg:pb-40">
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

          <div className="flex flex-col lg:flex-row gap-5 pt-10">
            <div className="w-full lg:w-1/2">
              <div className="space-y-4 w-full py-10">
                {faqLeft.map((item, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-md py-4 px-4 lg:px-8 transition-all duration-300 ${
                      openLeftIndex === index
                        ? "bg-(--primary) text-(--text) border border-[#222e48]"
                        : "bg-(--gray-color) border border-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleLeft(index)}
                      className={`w-full flex justify-between items-center cursor-pointer transition-all duration-300 border-b border-dashed ${
                        openLeftIndex === index
                          ? "pb-4 border-[#222e48]"
                          : "border-transparent"
                      }`}
                    >
                      <span className="text-xl text-left">{item.question}</span>

                      {openLeftIndex === index ? (
                        <i className="bi bi-dash-circle-fill text-2xl text-(--gray-color)"></i>
                      ) : (
                        <i className="bi bi-plus-circle-fill text-2xl text-(--primary)"></i>
                      )}
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openLeftIndex === index
                          ? "max-h-[300px] opacity-100 py-3"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                    >
                      <p className="text-sm">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="space-y-4 w-full py-10">
                {faqRight.map((item, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-md py-4 px-4 lg:px-8 transition-all duration-300 ${
                      openRightIndex === index
                        ? "bg-(--primary) text-(--text) border border-[#222e48]"
                        : "bg-(--gray-color) border border-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleRight(index)}
                      className={`w-full flex justify-between items-center cursor-pointer transition-all duration-300 border-b border-dashed ${
                        openRightIndex === index
                          ? "pb-4 border-[#222e48]"
                          : "border-transparent"
                      }`}
                    >
                      <span className="text-xl text-left">{item.question}</span>

                      {openRightIndex === index ? (
                        <i className="bi bi-dash-circle-fill text-2xl text-(--gray-color)"></i>
                      ) : (
                        <i className="bi bi-plus-circle-fill text-2xl text-(--primary)"></i>
                      )}
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openRightIndex === index
                          ? "max-h-[300px] opacity-100 py-3"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                    >
                      <p className="text-sm">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <Banner />
    </>
  );
}
