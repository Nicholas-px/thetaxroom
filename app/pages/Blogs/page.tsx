"use client";

import Image from "next/image";
import Link from "next/link";

import pageElem1 from "@/public/page-elm-1.png";
import pageElem2 from "@/public/page-elm-2.png";
import pageElem3 from "@/public/page-elm-3.png";
import pageElem4 from "@/public/page-elm-4.png";

import brand1 from "@/public/brand-icon-1.png";
import brand2 from "@/public/brand-icon-2.png";
import brand3 from "@/public/brand-icon-3.png";
import brand4 from "@/public/brand-icon-4.png";
import brand5 from "@/public/brand-icon-5.png";

import rocketIcon from "@/public/rocket-icon.png";
import pageBanner1 from "@/public/Page-banner-1.png";
import pageBanner2 from "@/public/Page-banner-2.png";

import BlogData from "@/app/JsonData/BlogsData.json";

export default function Blog() {
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
            Our Recent <span className="text-(--primary)"> Articles </span>
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

      <div className="px-[8%] lg:px-[16%] py-30 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BlogData.map((blog, index) => (
            <Link
              href={`/pages/Blogs/${blog.id}`}
              key={index}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="bg-(--gray-light) w-full p-5 rounded-2xl">
                <div className="blog-img">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                </div>

                <div className="blog-content mt-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-5 py-2 text-xl rounded-full bg-(--second) hover:bg-(--primary) transition-all duration-200 cursor-pointer">
                      {blog.type}
                    </span>

                    <span className="px-5 py-2 text-xl rounded-full bg-(--gray-color) text-(--primary) cursor-pointer">
                      {blog.date}
                    </span>
                  </div>

                  <h2 className="text-4xl my-5">{blog.title}</h2>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-(--primary) text-xl border-b">
                      Read More
                    </span>
                    <div className="music-waves2"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-[8%] lg:px-[10%]  pt-10 md:py-20 dark-section">
        <div className="page-banner p-5 md:p-15 flex flex-col justify-center items-center text-center rounded-2xl relative">
          <Image
            src={pageBanner1}
            alt="pagebanner"
            width={500}
            height={500}
            className="hidden lg:block absolute bottom-0 left-0"
          />

          <Image
            src={pageBanner2}
            alt="pagebanner"
            width={500}
            height={500}
            className="hidden lg:block absolute bottom-0 right-0"
          />

          <div className="music-waves"></div>

          <div className="my-3 mt-5">
            <span className="flex items-center gap-2 text-black px-4 py-3 rounded-full border border-black">
              <Image src={rocketIcon} alt="rocketIcon" width={30} height={30} />
              <h2 className="text-xl">Call To Action</h2>
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl mb-5 font-semibold w-full lg:w-[50%] text-(--text)">
            Let’s Discuss For Any Episodes
          </h1>

          <button className="btn btn2 bg-(--text)">
            Get In Touch <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </>
  );
}
