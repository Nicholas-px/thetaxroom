import Image from "next/image";
import heroBar from "@/public/hero-1.png";
import brand1 from "@/public/brand-icon-1.png";
import brand2 from "@/public/brand-icon-2.png";
import brand3 from "@/public/brand-icon-3.png";
import brand4 from "@/public/brand-icon-4.png";
import brand5 from "@/public/brand-icon-5.png";
import HeroImg from "@/public/Hero.png";
import roundedText from "@/public/Rouded-text.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="sun-shape">
        </div>

        <div className="px-[8%] lg:px-[16%] pt-25">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="w-full lg:w-1/2">
              <div className="hero-content w-full">
                <Image src={heroBar} alt="heroBar" />
                <h1 className="text-5xl md:text-7xl my-8 font-bold">
                  Making Tax<span className="text-(--primary)"> Simple </span>{" "}
                  for you
                </h1>

                <p className="tracking-wider text-xl">
                  Elevate your tax awareness,
                  We simplify complex tax requirements for Startup Founders, Students, and Finance Professionals.
                </p>

                <div className="hero-btn flex items-center gap-5 my-5">
                  <Link href="/pages/Episodes/LatestEpisode">
                    <button className="btn btn2">
                      Join the Room<i className="bi bi-arrow-right-short"></i>
                    </button>
                  </Link>

                  <Link href="/pages/Pricing">
                    <button className="btn btn1">
                      Subscribe <i className="bi bi-arrow-right-short"></i>
                    </button>
                  </Link>
                </div>

                <div className="mt-10">
                  <p className="tracking-wider text-xl">
                    Listen to Podcaster through
                  </p>

                  <div className="flex items-center gap-3 cursor-pointer mt-5">
                    <Image src={brand1} alt="brand1" />
                    <Image src={brand2} alt="brand2" />
                    <Image src={brand3} alt="brand3" />
                    <Image src={brand4} alt="brand4" />
                    <Image src={brand5} alt="brand5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full hero-img">
              <Image src={HeroImg} alt="HeroImg" />

              <div className="rounded-text">
                <Image src={roundedText} alt="roundedText" />

                <i className="bi bi-arrow-right-short"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
