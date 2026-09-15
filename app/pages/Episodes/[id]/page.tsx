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

import rocketIcon from "@/public/rocket-icon.png";
import pageBanner1 from "@/public/Page-banner-1.png";
import pageBanner2 from "@/public/Page-banner-2.png";

import Link from "next/link";
import EpisodesData from "@/app/JsonData/EpisodesData.json";
import { useParams } from "next/navigation";
import { useState } from "react";

type Episode = {
  id: number;
  name: string;
  title: string;
  para: string;
  episode: string;
  image: string;
  time: string;
};

const faqs = [
  {
    question: "How often are new episodes released?",
    answer:
      "New episodes are released weekly. We follow a consistent schedule so listeners can always look forward to fresh content at the same time each week.",
  },
  {
    question: "Can I suggest topics or guests for future episodes?",
    answer:
      "Absolutely! We love hearing from our listeners. You can suggest topics or guest ideas through our contact page or by reaching out on our social media channels.",
  },
  {
    question: "Is there a way to get early access or exclusive content?",
    answer:
      "Yes. Subscribers can get early access to select episodes along with exclusive behind-the-scenes content and bonus discussions not available to the public.",
  },
  {
    question: "How do I leave a review or feedback?",
    answer:
      "You can leave a review on your favorite podcast platform or send us feedback directly through our website. Your thoughts help us improve and grow.",
  },
  {
    question: "Do you accept listener questions?",
    answer:
      "We do! Listener questions are often featured in our episodes. Submit your questions via email or social media, and you might hear them answered on the show.",
  },
];

export default function EpisodeDetails() {
  const { id } = useParams();

  const episode = EpisodesData.find((ep) => ep.id === Number(id)) as
    | Episode
    | undefined;

  if (!episode) {
    return (
      <div className="dark-section px-[8%] lg:px-[16%] py-30 text-center">
        <h2 className="text-4xl text-gray-400">Episode not found</h2>

        <Link
          href="/pages/Episodes"
          className="inline-block mt-6 text-(--primary) underline"
        >
          Back to Episodes
        </Link>
      </div>
    );
  }

  const randomEpidoses = [...EpisodesData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  // Faq's
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
            Episode <span className="text-(--primary)"> Details</span>
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

      {/* Episode Details Wrapper  */}
      <div className="dark-section px-[8%] lg:px-[16%] py-20">
        <div className="flex flex-col lg:flex-row justify-baseline gap-5">
          <div className="w-full lg:w-1/1">
            <div className="flex flex-col">
              {/* Episode Details  */}
              <div className="bg-(--gray-color) p-5 rounded-2xl">
                {/* Episode Card */}
                <div className="flex w-full flex-col md:flex-row justify-between bg-(--gray-light) rounded-lg p-4 overflow-hidden">
                  <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-[90%] lg:w-full">
                      <Image
                        src={episode.image}
                        alt={episode.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/1">
                    <div className="p-5">
                      <div className="flex flex-row flex-wrap justify-between align-center">
                        <span className="bg-(--gray-color) px-5 py-3 rounded-full text-(--primary) font-semibold tracking-wide">
                          {episode.episode}
                        </span>

                        <Link href={`/pages/Episodes/${episode.id}`}>
                          <p className="font-light text-gray-200 py-3 hover:text-(--primary) tracking-wider transition-all duration-200">
                            <i className="bi bi-mic text-(--primary)"></i>
                            {episode.name}
                          </p>
                        </Link>

                        <h2 className="text-gray-300 py-3">
                          <i className="bi bi-clock pe-1 text-(--primary)"></i>
                          {episode.time}
                        </h2>
                      </div>

                      <Link href={`/pages/Episodes/${episode.id}`}>
                        <h2 className="mt-3 text-4xl hover:text-(--primary) transition-all duration-200">
                          {episode.title}
                        </h2>
                        <p className="my-3">{episode.para}</p>
                      </Link>

                      <div className="flex justify-between items-center gap-5 mt-5">
                        <Link
                          href={`/pages/Episodes/${episode.id}`}
                          className="flex items-center gap-2 group"
                        >
                          <i className="bi bi-play p-4 bg-(--primary) rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-(--second) group-hover:text-white cursor-pointer transition-all duration-200"></i>
                          <h2 className="text-xl underline text-(--primary) group-hover:text-(--second) transition-all duration-200">
                            Listen Now
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-(--gray-light) rounded-lg mt-5 p-5">
                  <h2 className="text-4xl mb-4">Episode Description </h2>
                  <p className="text-gray-200 tracking-wide">
                    Explore the enchanting world of storytelling in Episode 12 -
                    "Stories Resonate: The Art of Storytelling." In this
                    episode, we unravel the power of narratives, discussing how
                    stories connect us, evoke emotions, and leave a lasting
                    impact. Join us for an insightful conversation on the
                    techniques, emotions, and magic that make storytelling a
                    timeless art form.
                  </p>

                  <h2 className="text-3xl my-5">Guest appearance</h2>
                  <p className="text-gray-200 tracking-wide">
                    Learn more about our special guest, a seasoned storyteller
                    with a passion for weaving narratives that resonate. Segment
                    of our podcast, where we bring you the insights and
                    perspectives of remarkable individuals who have made their
                    mark in various fields.
                  </p>

                  <h2 className="text-4xl my-5 mt-8">More Related Episodes</h2>
                  <div className="flex flex-col mt-5">
                    <div className="flex flex-col items-center gap-5 ">
                      {randomEpidoses.map((episode, index) => (
                        <div
                          key={index}
                          className="flex flex-col bg-(--gray-color) p-5 rounded-2xl items-center gap-2"
                        >
                          <Link
                            href={`/pages/Episodes/${episode.id}`}
                            className="flex flex-col md:flex-row gap-3"
                          >
                            <div className="">
                              <Image
                                src={episode.image}
                                alt={episode.title}
                                width={1000}
                                height={1000}
                                className="w-full h-full rounded-2xl object-cover"
                              />
                            </div>

                            <div className="">
                              <h2 className="text-4xl hover:text-(--primary) transition-all duration-200">
                                {episode.title}
                              </h2>

                              <h2 className="text-2xl my-2 text-(--primary)">
                                {episode.name}
                              </h2>

                              <p className="text-gray-200">{episode.para}</p>

                              <div className="flex items-center gap-2 mt-2">
                                <i className="bi bi-instagram w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                                <i className="bi bi-github w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                                <i className="bi bi-twitter-x w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                                <i className="ri-youtube-line w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                                <i className="bi bi-whatsapp w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl my-5 mt-8">Transcript</h2>
                  <p className="text-gray-300 ">
                    For those who prefer reading or have accessibility needs,
                    here's the full transcript of the episode. View captivating
                    images and visuals that complement the storytelling journey
                    explored in this episode. Untangle the strands that bind us
                    to stories that have formed cultures, sparked imaginations,
                    and stirred emotions throughout history. This podcast allows
                    you to dive into the stories that resonate and uncover the
                    everlasting essence of storytelling, whether you're a
                    literary aficionado, a cinema buff, or simply intrigued by
                    the craft of weaving narratives.
                  </p>
                  <h2 className="text-2xl my-5">
                    App Exploration: Your Current Playground?
                  </h2>
                  <p className="text-gray-300">
                    The ever-changing world of apps gives you a front-row ticket
                    to the latest technological marvels. Join us as we explore
                    the exciting world of digital innovation, with each episode
                    serving as a journey of discovery through the apps that
                    shape our daily lives. Apps have become our digital
                    playgrounds in a tech-centric world, bringing together
                    creativity, utility, and enjoyment. Our podcast explores the
                    various programs that enrich and simplify our modern
                    existence.
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

            {/* Faq  */}
            <div className="bg-(--gray-color) p-5 rounded-2xl mt-5">
              <h2 className="text-3xl font-semibold text-(--primary)">FAQs</h2>

              <div className="border border-dashed border-(--primary) mt-3 mb-5 opacity-30"></div>

              {/* Faq Content  */}
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={index}
                      className={`rounded-xl p-4 transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "bg-(--primary) text-black"
                          : "bg-(--gray-light)"
                      }`}
                    >
                      {/* Questions  */}
                      <div
                        className={`flex justify-between items-center cursor-pointer pb-3 transition-all duration-300 ${
                          isOpen ? "border-b border-dashed border-black/40" : ""
                        }`}
                        onClick={() => toggleFaq(index)}
                      >
                        <h3 className="text-xl font-medium">{faq.question}</h3>

                        {/* Icon  */}
                        <span
                          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-black text-(--primary)"
                              : "bg-(--primary) text-black"
                          }`}
                        >
                          <i
                            className={`bg ${
                              isOpen ? "bi-dash-lg" : "bi-plus-lg"
                            } text-xl`}
                          ></i>
                        </span>
                      </div>

                      {/* Answers  */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
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
            </div>
          </div>

          <div className="w-full lg:w-1/2 sticky top-20 left-0 h-full">
            <div className="bg-(--gray-color) p-5 rounded-2xl">
              <div className="bg-[#1c1d20] p-5 rounded-2xl">
                <div className="flex justify-center items-center">
                  <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
                    <Image
                      src={episode.image}
                      alt={episode.name}
                      width={800}
                      height={800}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center flex flex-col items-center justify-center mt-4">
                  <h3 className="text-(--primary)">Hosted by</h3>
                  <h2 className="text-2xl">{episode.name}</h2>
                  <h3 className="text-(--primary)">Follow on</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <i className="bi bi-instagram w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                    <i className="bi bi-github w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                    <i className="bi bi-twitter-x w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                    <i className="ri-youtube-line w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                    <i className="bi bi-whatsapp w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-200 cursor-pointer"></i>
                  </div>
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

      <div className="px-[8%] lg:px-[10%] py-20 dark-section">
        <div className="page-banner p-5 md:p-15 flex flex-col justify-center items-center text-center rounded-2xl relative">
          <Image
            src={pageBanner1}
            alt="PageBanner1"
            width={500}
            height={550}
            className="hidden lg:block absolute bottom-0 left-0"
          />

          <Image
            src={pageBanner2}
            alt="PageBanner2"
            width={500}
            height={550}
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
