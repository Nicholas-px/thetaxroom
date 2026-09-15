"use client";
import Image from "next/image";
import test1 from "@/public/testimonial-card-1.png";
import test2 from "@/public/testimonial-card-2.png";
import test3 from "@/public/testimonial-card-3.png";
import test4 from "@/public/testimonial-card-4.png";
import test5 from "@/public/testimonial-card-5.png";
import quote from "@/public/quote.png";
import quoteBg from "@/public/testimonial-card-qoute-bg.png";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";

const TestimonialData = [
  /*{
    id: 1,
    img: test1,
    para: "“This podcast has completely changed how I start my mornings. The stories, insights, and sound quality are simply outstanding.”",
    name: "name here",
    role: "Frontend Developer",
  },*/

  /*{
    id: 2,
    img: test2,
    para: "“Every episode feels thoughtfully crafted. It’s inspiring, relaxing, and incredibly motivating at the same time.”",
    name: "here",
    role: "Music Artist",
  },*/
  {
    id: 3,
    img: test3,
    para: "“I’ve learned so much just by listening during my commute. The conversations are meaningful and well-paced.”",
    name: "Angellica Donald",
    role: "Tax Consultant",
  },
  {
    id: 4,
    img: test4,
    para: "“The hosts create such a warm and engaging atmosphere. It feels like you’re part of the conversation.”",
    name: "Nicholaus Malembo",
    role: "Developer",
  },
  {
    id: 5,
    img: test5,
    para: "“High-quality content, great storytelling, and consistent value in every episode. Highly recommended.”",
    name: "Josphine Gaspery",
    role: "Expert Host",
  },
];

export default function Testimonial() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="dark-section wave-wrapper-section2">
        <div className="px-[8%] lg:px-[16%] py-30 pb-10 lg:pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full flex justify-center items-center text-center">
              <div className="w-full lg:w-1/2 title flex flex-col gap-2">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                    <i className="bi bi-rocket-takeoff pe-4"></i>Testimonial
                  </h2>
                </div>
                <h1 className="text-6xl lg:text-7xl font-semibold mt-4">
                  Listener Love, What They Say
                </h1>

                <p className="text-gray-300 tracking-wider">
                  Explore what our listeners have to say about their experiences
                  with our podcast. Their testimonials capture the essence of
                  the joy, inspiration
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-30 pb-10">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
            speed={1500}
            className="test-wrapper-swiper"
          >
            {TestimonialData.map((test, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="w-full lg:w-2/5">
                    <div className="test-img relative">
                      <Image
                        src={test.img}
                        alt={test.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />

                      <div className="quote-img">
                        <Image
                          src={quoteBg}
                          alt="quoteBg"
                          className="object-contain absolute top-0 right-0"
                        />

                        <Image
                          src={quote}
                          alt="quote"
                          className="object-contain p-5 rounded-full absolute bg-(--primary) top-0 right-0"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 test-content-wrap">
                    <div className="test-content">
                      <div className="test-stars flex items-center gap-3">
                        <div className="bi bi-star-fill text-(--primary)"></div>
                        <div className="bi bi-star-fill text-(--primary)"></div>
                        <div className="bi bi-star-fill text-(--primary)"></div>
                        <div className="bi bi-star-half text-(--primary)"></div>
                        <div className="bi bi-star text-(--primary)"></div>
                      </div>

                      <p className="text-xl text-gray-300 tracking-wide my-5">
                        {test.para}
                      </p>

                      <div className="test-border border-t border-dashed border-(--primary-light) opacity-50 pt-5"></div>

                      <div className="test-info">
                        <h2 className="text-3xl">{test.name}</h2>
                        <h2 className="text-xl mt-2 text-gray-400">
                          {test.role}
                        </h2>
                      </div>
                    </div>

                    {/* Custom Navigation Button  */}
                    <div className="text-btns flex justify-start gap-4 mt-6">
                      <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-black transition-all duration-200 hover:-translate-x-1 cursor-pointer"
                      >
                        <i className="bi bi-chevron-double-left"></i>
                      </button>

                      <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-black transition-all duration-200 hover:translate-x-1 cursor-pointer"
                      >
                        <i className="bi bi-chevron-double-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
