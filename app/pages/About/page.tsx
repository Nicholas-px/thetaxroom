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

import Experience1 from "@/public/elevate-banner-1.png";
import Experience2 from "@/public/elevate-banner-2.png";
import arrow1 from "@/public/elevate-banner-arrow1.png";
import arrow2 from "@/public/elevate-banner-arrow2.png";

import WhyChooseImg1 from "@/public/why-choose-1.png";
import WhyChooseImg2 from "@/public/why-choose-2.png";
import WhyChooseImg3 from "@/public/why-choose-3.png";

import CountUp from "react-countup";
import Link from "next/link";
import HostProfiles from "../Index/HostProfiles/page";
import Testimonial from "../Index/Testimonial/page";
import Banner from "../Index/Banner/page";

export default function About() {
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
            About{" "}
            <span className="text-(--primary) font-light LogoFont">
              <span className="text-white">The Tax</span> Room
            </span>
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

      {/* Experience  */}
      <div className="dark-section pb-20">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="content">
                <div className="title flex flex-col gap-2">
                  <div>
                    <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                      <i className="bi bi-rocket-takeoff pe-4"></i>Our Purpose 
                      And Vision
                    </h2>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-semibold mt-7 mb-5">
                    Elevating Tax Awareness{" "}
                    <span className="text-(--primary)">Tanzania</span>
                  </h1>
                </div>

                <p className="my-5 tracking-wider">
                  THE TAX ROOMN "We bridge the knowledge gap in tax regulations, delivering practical 
                  education to elevate business compliance and financial literacy nationwide".
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b border-dashed border-(--prim-light) pb-6 pt-5">
                  <div className="flex items-center gap-2">
                    <div>
                      <i className="bi bi-volume-up border-s-2 ps-2 border-[#0DE27C] text-5xl text-(--primary)"></i>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Simplfy Complex Laws</h2>
                      <p className="mt-3 text-gray-300">
                        Immersive Discussions that inspire,educate and inform..
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div>
                      <i className="bi bi-people border-s-2 ps-3 border-[#0DE27C] text-5xl text-(--primary)"></i>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Build Regulatory Trust</h2>
                      <p className="mt-3 text-gray-300">
                        Bringing entrepreneurs,Investors,tax professionals and scholars together.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5 ">
                  <button className="btn btn2" style={{ fontWeight: 500 }}>
                    Discover the Initiative <i className="bi bi-arrow-right-short"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="experience-images flex items-start gap-3">
                <Image
                  src={Experience1}
                  alt="Experience1"
                  className="exp-img rounded-2xl"
                />
                <Image
                  src={Experience2}
                  alt="Experience2"
                  className="exp-img hidden md:block rounded-2xl"
                />

                <Image src={arrow1} alt="arrow1" className="exp-arrow1" />

                <div className="absolute bottom-0 right-35 lg:right-0 bg-[#ddb60a] p-5 rounded-2xl">
                  <div className="flex items-center justify-center gap-5 text-(--text)">
                    <h2 className="text-6xl font-semibold">
                      <CountUp start={0} end={17} duration={5} />
                    </h2>

                    <p className="text-xl w-1/2">Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us  */}
      <div className="light-section">
        <div className="px-[8%] lg:px-[16%] py-30 pb-50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="whyChooseUs-img flex items-end gap-5">
                <Image
                  src={WhyChooseImg1}
                  alt="WhyChooseImg"
                  className="w-full h-fit border-t-2 border-(--primary) pt-5"
                />

                <Image
                  src={WhyChooseImg2}
                  alt="WhyChooseImg"
                  className="w-full h-fit"
                />

                <Image src={WhyChooseImg3} alt="WhyChooseImg" />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="content">
                <div className="title flex flex-col gap-2">
                  <div>
                    <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                      <i className="bi bi-rocket-takeoff pe-4"></i>Why Choose Us
                    </h2>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-semibold mt-7 mb-5">
                    Tax Doesn't Have to Boring, We Make It Engaging
                  </h1>
                </div>

                <p className="my-5 tracking-wider">
                  "We're turning complex tax laws into practical, easy-to-digest chats. 
                  Tune in to get the know-how to grow your business, stay compliant, 
                  and actually enjoy learning about finance!"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b border-dashed border-(--prim-light) pb-6 pt-5">
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-(--primary) rounded-full"></i>{" "}
                    No-Jargon Tax Chats
                  </h2>
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-(--primary) rounded-full"></i>{" "}
                    Real-World Business Hacks
                  </h2>
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-(--primary) rounded-full"></i>{" "}
                    100% Tanzanian Context
                  </h2>
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-(--primary) rounded-full"></i>{" "}
                    Watch, Listen, or Read
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-5 ">
                  <button className="btn btn2" style={{ fontWeight: 500 }}>
                    Hit Play on Tax <i className="bi bi-arrow-right-short"></i>
                  </button>

                  <Link
                    href="/app/pages"
                    className="flex items-center gap-2 group"
                  >
                    <i className="bi bi-play p-4 bg-(--primary) rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-(--second) group-hover:text-white cursor-pointer transition-all duration-200"></i>
                    <h2 className="text-xl underline text-(--primary) group-hover:text-(--second) transition-all duration-200">
                      Meet the Crew
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Info  */}
      <div className="dark-section about-wave2 wave-wrapper-section2">
        <div className="px-[8%] lg:px-[16%] py-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-(--gray-light) rounded-2xl p-8 text-center">
              <h2 className="text-6xl font-semibold text-(--primary)">
                <CountUp start={0} end={99} enableScrollSpy scrollSpyOnce />K
              </h2>
              <p className="mt-3 text-xl text-gray-300">Total Episodes</p>
            </div>

            {/* Card 2  */}
            <div className="bg-(--gray-light) rounded-2xl p-8 text-center">
              <h2 className="text-6xl font-semibold text-(--primary)">
                <CountUp start={0} end={595} enableScrollSpy scrollSpyOnce />K
              </h2>
              <p className="mt-3 text-xl text-gray-300">Podcast Subscribers</p>
            </div>

            {/* Card 3 */}
            <div className="bg-(--gray-light) rounded-2xl p-8 text-center">
              <h2 className="text-6xl font-semibold text-(--primary)">
                <CountUp start={0} end={210} enableScrollSpy scrollSpyOnce />M
              </h2>
              <p className="mt-3 text-xl text-gray-300">Happy Listeners</p>
            </div>

            {/* Card 4 */}
            <div className="bg-(--gray-light) rounded-2xl p-8 text-center">
              <h2 className="text-6xl font-semibold text-(--primary)">
                <CountUp start={0} end={72} enableScrollSpy scrollSpyOnce />+
              </h2>
              <p className="mt-3 text-xl text-gray-300">Our Awards</p>
            </div>
          </div>
        </div>
      </div>

      <HostProfiles />
      <Testimonial />
      <Banner />
    </>
  );
}
