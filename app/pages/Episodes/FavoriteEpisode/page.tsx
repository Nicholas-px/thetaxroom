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

import EpisodesData from "@/app/JsonData/EpisodesData.json";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Link from "next/link";

type Episode = {
  id: number;
  name: string;
  title: string;
  para: string;
  episode: string;
  image: string;
  time: string;
};

export default function FavoriteEpisodes() {
  const [favorites, setFavorites] = useState<Episode[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteEpisodes");

    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const removeFavorite = (id: number) => {
    const removeFavorite = favorites.find((ep) => ep.id === id);

    const updated = favorites.filter((ep) => ep.id !== id);
    setFavorites(updated);
    localStorage.setItem("favoriteEpisodes", JSON.stringify(updated));

    toast.error("Removed from favorites ❌");
  };

  return (
    <>
      {" "}
      {/* Page Section  */}
      <div className="page-section">
        <Image src={pageElem2} alt="Element" className="elm2 element" />
        <Image src={pageElem3} alt="Element" className="elm3 element" />
        <Image src={pageElem4} alt="Element" className="elm4 element" />

        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={pageElem1} alt="Element" className="w-full h-full" />

          <h1 className="text-6xl lg:text-8xl font-semibold my-6">
            Favorite <span className="text-(--primary)">Episodes</span>
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
      <div className="dark-section px-[8%] lg:px-[16%] py-20">
        {favorites.length === 0 ? (
          <p className="text-center text-gray-400 text-xl border-t border-b border-red-400 py-5">
            ❤️ No favorite episodes yet
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {favorites.map((episode) => (
              <div
                key={episode.id}
                className="flex w-full flex-col lg:flex-row justify-between bg-(--gray-light) rounded-lg p-4 overflow-hidden"
              >
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <div className="w-[80%] lg:w-full">
                    <Image
                      src={episode.image}
                      alt={episode.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/1">
                  <div className="p-1 md:p-5">
                    <div className="flex flex-row flex-wrap justify-between items-center">
                      <Link href={`/pages/Episodes/${episode.id}`}>
                        <p className="font-light text-gray-200 hover:text-(--primary) tracking-wider transition-all duration-200">
                          <i className="bi bi-mic text-(--primary)"></i>
                          {episode.name}
                        </p>
                      </Link>

                      <h2 className="text-gray-300">
                        <i className="bi bi-clock pe-1 text-(--primary)"></i>
                        {episode.time}
                      </h2>
                      <i
                        onClick={() => removeFavorite(episode.id)}
                        className="bi bi-x-circle text-(--primary) text-xl cursor-pointer transition-all duration-200"
                        title="Remove from Favorite"
                      ></i>
                    </div>

                    <Link href={`/pages/Episodes/${episode.id}`}>
                      <h2 className="mt-3 text-3xl hover:text-(--primary) transition-all duration-200">
                        {episode.title}
                      </h2>
                      <p className="my-3">{episode.para}</p>
                    </Link>

                    <div className="flex flex-wrap justify-between items-center gap-5">
                      <Link
                        href={`/pages/Episodes/${episode.id}`}
                        className="flex items-center gap-2 group"
                      >
                        <i className="bi bi-play p-4 bg-(--primary) rounded-full flex text-black text-2xl group-hover:bg-(--second) group-hover:text-white items-center justify-center transition-all duration-200"></i>
                        <h2 className="text-xl underline text-(--primary) group-hover:text-(--second) transition-all duration-200">
                          Listen Now
                        </h2>
                      </Link>

                      <span className="bg-(--gray-color) px-5 py-3 rounded-full text-(--primary) font-semibold tracking-wide">
                        {episode.episode}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
