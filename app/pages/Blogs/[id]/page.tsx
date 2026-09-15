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
import { useParams } from "next/navigation";

export default function BlogDetails() {
  const { id } = useParams();

  const blog = BlogData.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="dark-section px-[8%] lg:px-[16%] py-30 text-center">
        <h2 className="text-4xl text-gray-400">Blog not found</h2>

        <Link
          href="/pages/Blogs"
          className="inline-block mt-6 text-(--primary) underline"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

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
            Blog <span className="text-(--primary)"> Details </span>
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

      {/* Blog Details Wrapper  */}
      <div className="dark-section px-[8%] lg:px-[16%] py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full lg:w-1/1">
            <div className="flex flex-col">
              {/* Blog Details  */}
              <div className="bg-(--gray-color) p-5 rounded-2xl">
                {/* Blog Card */}
                <div className="flex w-full flex-col md:flex-row justify-between bg-(--gray-light) rounded-lg p-4 overflow-hidden">
                  <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-[90%] lg:w-full">
                      <Image
                        src={blog.image}
                        alt="topListens"
                        width={1000}
                        height={1000}
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="p-1 md:p-5">
                      <div className="flex flex-row flex-wrap gap-5 align-center">
                        <span className="px-5 py-2 text-xl rounded-full bg-(--second) hover:bg-(--primary) transition-all duration-200 cursor-pointer">
                          {blog.type}
                        </span>

                        <span className="px-5 py-2 text-xl rounded-full bg-(--second) hover:bg-(--primary) transition-all duration-200 cursor-pointer">
                          {blog.date}
                        </span>
                      </div>

                      <Link href={`/pages/Episodes/${blog.id}`}>
                        <h2 className="mt-3 text-4xl hover:text-(--primary ) transition-all duration-200">
                          {blog.title}
                        </h2>
                      </Link>

                      <div className="mt-4">
                        <p className="text-sm text-gray-300">
                          Discover how powerful storytelling transforms simple
                          ideas into memorable podcast experiences that
                          captivate listeners and create emotional impact.
                        </p>
                        <p className="text-sm text-gray-300 mt-2">
                          Learn proven techniques hosts use to build tension,
                          shape narratives, and connect deeply with diverse
                          audiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-(--gray-light) rounded-lg mt-5 p-5">
                  <h2 className="text-3xl mb-4">
                    The Essence of Storytelling in Podcasts
                  </h2>
                  <p className="text-gray-300">
                    Storytelling is the heart of great podcasting. It builds
                    emotional connection, keeps listeners engaged, and
                    transforms conversations into memorable experiences that
                    resonate long after the episode ends.
                  </p>
                  <div className="flex flex-col my-5 ">
                    <p className="text-sm text-gray-300">
                      <span>1.</span> Covers diverse topics from niche interests
                      to global conversations.
                    </p>
                    <p className="text-sm text-gray-300">
                      <span>2.</span> Offers insights and perspectives rarely
                      found elsewhere.
                    </p>
                    <p className="text-sm text-gray-300">
                      <span>3.</span> Creates meaningful connections with
                      like-minded audiences.
                    </p>
                    <p className="text-sm text-gray-300">
                      <span>4.</span> Encourages discussion, learning, and
                      shared experiences.
                    </p>
                  </div>
                  <h2 className="text-3xl mb-4">Learning On the Go</h2>
                  <p className="text-gray-300">
                    Podcasts have become a powerful learning companion. From
                    personal growth to professional insights, they turn everyday
                    moments into opportunities for discovery and inspiration.
                  </p>
                  <div className="flex flex-col my-5 ">
                    <p className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      Learn anytime, anywhere—at your own pace.
                    </p>
                    <p className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      Gain insights from experts and industry leaders.
                    </p>
                    <p className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      Stay informed without interrupting your routine.
                    </p>
                    <p className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      Turn commutes and workouts into learning sessions.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {BlogData.slice(1, 5).map((blog, index) => (
                      <Image
                        key={index}
                        src={blog.image}
                        alt="toplisting"
                        width={1000}
                        height={1000}
                        className="w-full h-full rounded-2xl"
                      />
                    ))}
                  </div>

                  <h2 className="text-3xl my-5">A Connection Beyond Words</h2>

                  <p className="text-gray-200 ">
                    Podcasting goes beyond words. Through voice and emotion,
                    hosts create intimate experiences that feel personal,
                    authentic, and deeply engaging.
                  </p>

                  <h2 className="text-3xl my-5">Immersive Experiences:</h2>

                  <p className="text-gray-200 ">
                    A well-crafted podcast story transports listeners into new
                    worlds. Whether real or fictional, immersive storytelling
                    builds empathy and leaves a lasting impression.
                  </p>

                  <div className="flex flex-wrap items-center gap-5 mt-5">
                    <h2 className="text-(--primary) text-3xl ">
                      Follow <i className="bi bi-chevron-double-right"></i>
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <i className="bi bi-instagram w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                      <i className="bi bi-github w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                      <i className="bi bi-twitter-x w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                      <i className="ri-youtube-line w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                      <i className="bi bi-whatsapp w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 sticky top-20 left-0 h-full">
            <div className="bg-(--gray-color) p-5 rounded-2xl">
              <div className="bg-[#1C1D20] p-5 rounded-2xl">
                <h2 className="text-2xl text-(--primary)">More Related Blog</h2>

                <div className="border border-dashed border-(--primary) opacity-20 my-3"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                  {BlogData.slice(1, 7).map((blog, index) => (
                    <Link
                      key={index}
                      className="flex flex-wrap items-center gap-3 mt-5"
                      href={`/pages/Blogs/${blog.id}`}
                    >
                      <div className="w-full md:w-1/2">
                        <Image
                          key={index}
                          src={blog.image}
                          alt="topListens"
                          width={1000}
                          height={1000}
                          className="w-full h-full rounded-lg"
                        />
                      </div>

                      <div className="w-full md:w-1/1 flex flex-col">
                        <h2 className="text-gray-300 text-2xl md:text-[1rem] hover:text-(--primary) transition-all duration-300 cursor-pointer">
                          {blog.title}
                        </h2>

                        <h4 className="text-(--primary) mt-2">{blog.date}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#1c1d20] p-5 rounded-2xl mt-5">
                <h2 className="text-3xl text-(--primary) font-semibold">
                  Listen On
                </h2>
                <div className="border border-dashed border-(--primary) mt-3 mb-5 opacity-30"></div>
                <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
                  <Image src={brand1} alt="brand" />
                  <Image src={brand2} alt="brand" />
                  <Image src={brand3} alt="brand" />
                  <Image src={brand4} alt="brand" />
                  <Image src={brand5} alt="brand" />
                </div>
              </div>

              <div className="bg-[#1c1d20] p-5 rounded-2xl mt-5">
                <h2 className="text-3xl text-(--primary) font-semibold">
                  Popular Tag
                </h2>

                <div className="border border-dashed border-(--primary) mt-3 mb-5 opacity-30"></div>
                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <span className="px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black transition-all duration-300 cursor-pointer">
                    Love Story
                  </span>
                  <span className="px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black transition-all duration-300 cursor-pointer">
                    Romantic
                  </span>
                  <span className="px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black transition-all duration-300 cursor-pointer">
                    Music
                  </span>
                  <span className="px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black transition-all duration-300 cursor-pointer">
                    Storytelling
                  </span>
                  <span className="px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black transition-all duration-300 cursor-pointer">
                    New
                  </span>
                  <span className="px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black transition-all duration-300 cursor-pointer">
                    Emotional
                  </span>
                  <span className="px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black transition-all duration-300 cursor-pointer">
                    Softhearted
                  </span>
                  <span className="px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black transition-all duration-300 cursor-pointer">
                    Melancholic
                  </span>
                </div>
              </div>
            </div>
          </div>
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
            Let’s Talk About Your Next Favorite Episode
          </h1>

          <button className="btn btn2 bg-(--text)">
            Get In Touch <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </>
  );
}
