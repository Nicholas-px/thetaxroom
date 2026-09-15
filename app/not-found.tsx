import Image from "next/image";
import Page404Img from "@/public/Error404.png";
import Link from "next/link";

export default function Page404() {
  return (
    <>
      <div className="dark-section">
        <div className="flex flex-col justify-center items-center h-screen">
          <Image
            src={Page404Img}
            alt="Page404Img"
            width={1000}
            height={1000}
            className="w-full lg lg:w-[70%] h-[50%] lg:h-[70%] object-contain"
          />

          <Link
            href="/"
            className="mt-0 md:mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm tracking-wide transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <i className="bi bi-arrow-left-short text-xl"></i>
            Back To Home
          </Link>
        </div>
      </div>
    </>
  );
}
