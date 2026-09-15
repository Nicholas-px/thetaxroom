import Image from "next/image";
import Logo from "@/public/tax-room-logo.png";
import Link from "next/link";

import brand1 from "@/public/brand-icon-1.png";
import brand2 from "@/public/brand-icon-2.png";
import brand3 from "@/public/brand-icon-3.png";
import brand4 from "@/public/brand-icon-4.png";
import brand5 from "@/public/brand-icon-5.png";

export default function Footer() {
  return (
    <>
      <div className="dark-section">
        <div className="px-[8%] lg:px-[16%] py-20 pb-10">
          <footer>
            <div className="flex flex-wrap justify-between items-center gap-5 border-b border-(--primary)/30 pb-8">
              <Link href="/">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Image
                    src={Logo}
                    alt="The Tax Room Logo"
                    className="object-contain w-10 h-10 rounded-lg"
                  />

                  <h1 className="LogoFont text-3xl tracking-wide">
                    The Tax <span className="text-(--primary)">Room</span>
                  </h1>
                </div>
              </Link>

              <div className="footer-waves relative">
                <div className="music-waves2"></div>
                <div className="music-waves2 absolute top-0 left-0"></div>
                <div className="music-waves2 absolute top-0 left-0"></div>
              </div>

              <div className="flex items-center gap-3">
                <h2 className="flex flex-wrap items-center gap-3 text-xl">
                  Subscribe on :
                  <div className="flex items-center justify-center gap-3 cursor-pointer">
                    <Image src={brand1} alt="brand" />
                    <Image src={brand2} alt="brand" />
                    <Image src={brand3} alt="brand" />
                    <Image src={brand4} alt="brand" />
                    <Image src={brand5} alt="brand" />
                  </div>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 py-15 pb-15">
              <div className="footer-col">
                <h2 className="text-4xl mb-5">Pages</h2>

                <div className="flex flex-col gap-2">
                  <Link href="/">
                    <h3 className="text-gray-300 text-xl hover:text-(--primary) hover:translate-x-1 transition-all duration-300 cursor-pointer">
                      Home
                    </h3>
                  </Link>
                  <a href="/pages/About">
                    <h3 className="text-gray-300 text-xl hover:text-(--primary) hover:translate-x-1 transition-all duration-300 cursor-pointer">
                      About
                    </h3>
                  </a>
                  <Link href="/pages/Episodes">
                    <h3 className="text-gray-300 text-xl hover:text-(--primary) hover:translate-x-1 transition-all duration-300 cursor-pointer">
                      Episodes
                    </h3>
                  </Link>
                  <Link href="/pages/Blogs">
                    <h3 className="text-gray-300 text-xl hover:text-(--primary) hover:translate-x-1 transition-all duration-300 cursor-pointer">
                      Blog
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="footer-col">
                <h2 className="text-4xl mb-5">Contact</h2>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl text-gray-300 hover:text-(--primary) transition-all duration-200 cursor-pointer">
                    <i className="bi bi-telephone-x pe-2 text-(--primary)"></i>{" "}
                    +255 794 577 881
                  </h2>
                  <h2 className="text-xl text-gray-300 hover:text-(--primary) transition-all duration-200 cursor-pointer">
                    <i className="bi bi-telephone pe-2 text-(--primary)"></i>{" "}
                    +255 758 003 633
                  </h2>
                  <h2 className="text-xl text-gray-300 hover:text-(--primary) transition-all duration-200 cursor-pointer">
                    <i className="bi bi-envelope pe-2 text-(--primary)"></i>{" "}
                    info@thetaxroom.co.tz
                  </h2>
                </div>
              </div>

              <div className="">
                <h2 className="text-4xl mb-5">Address</h2>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl text-gray-300 hover:text-(--primary) transition-all duration-200 cursor-pointer">
                    <i className="bi bi-geo-alt pe-2 text-(--primary)"></i>Plot 3511
                    Block 46 Mapambano rd,Nzasa st
                  </h1>
                </div>
              </div>
            </div>

            <div className="footer-bottom border-t border-(--primary)/30 pt-8">
              <div className="flex flex-wrap justify-center lg:justify-between items-center text-center gap-5">
                <p className="text-gray-300">
                  © Copyright 2026. All Rights Reserved by {"The Tax Room Podcast.co.tz"}
                  <Link
                    className="text-(--primary) text-xl"
                    href="https://santhosh-vs-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
              
                  </Link>
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    className="hover:text-(--primary) hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    href="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                  <Link
                    className="hover:text-(--primary) hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    href="/"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
