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

import host1 from "@/public/host-profile-1.png";
import host2 from "@/public/host-profile-2.png";
import host3 from "@/public/host-profile-3.png";
import host4 from "@/public/host-profile-4.png";
import host5 from "@/public/host-profile-5.png";
import host6 from "@/public/host-profile-6.png";
import host7 from "@/public/host-profile-7.png";
import host8 from "@/public/host-profile-8.png";
import host9 from "@/public/host-profile-9.png";
import host10 from "@/public/host-profile-10.png";
import Banner from "../Index/Banner/page";

const HostProfilesData = [
  {
    id: 1,
    img: host1,
    name: "Angelica Donald ",
    role: "Tax Consultant",
  },
  {
    id: 2,
    img: host2,
    name: "Nicholaus Malembo",
    role: "Developer",
  },
  {
    id: 3,
    img: host3,
    name: "Josphine Gaspery",
    role: "Expert Host",
  },
  {
    id: 4,
    img: host4,
    name: "Dativa Awe",
    role: "Tax Consultant",
  },

];

export default function HostProfiles() {
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
            Podcast <span className="text-(--primary)"> Host </span>
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

      <div className="dark-section pt-20">
        <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-30 pb-10">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {HostProfilesData.map((host, index) => (
                <div key={index} className={`host-card relative`}>
                  <div className="host-img-wrap">
                    <div className="host-img overflow-auto rounded-2xl">
                      <Image
                        src={host.img}
                        alt={host.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="host-info px-3 py-4">
                    <div className="text-2xl text-gray-300">{host.name}</div>
                    <p className="text-lg text-gray-300">{host.role}</p>
                  </div>

                  <div className="host-icons absolute bottom-5 bg-(--gray-color) rounded-full right-5 group">
                    {/* Plus Icon  */}
                    <i className="bi bi-plus-lg bg-(--gray-color) w-14 h-14 flex items-center justify-center rounded-full cursor-pointer border border-transparent group-hover:rounded-t-none group-hover:bg-(--gray-light) group-hover:border group-hover:border-(--gray-color) transition-all duration-300"></i>

                    {/* Hidden Social Icons  */}
                    <div className="host-hidden-icon flex flex-col absolute bottom-13 right-0 opacity-0 invisible  translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0  transition-all duration-300 ease-out bg-(--gray-color) rounded-t-full p-2">
                      <i className="bi bi-facebook w-10 h-10 mb-1 flex items-center justify-center rounded-full bg-(--gray-light) border border-(--primary) hover:bg-(--primary) transition-all duration-200 cursor-pointer"></i>
                      <i className="bi bi-whatsapp w-10 h-10 mb-1 flex items-center justify-center rounded-full bg-(--gray-light) border border-(--primary) hover:bg-(--primary) transition-all duration-200 cursor-pointer"></i>
                      <i className="bi bi-twitter-x w-10 h-10 flex items-center justify-center rounded-full bg-(--gray-light) border border-(--primary) hover:bg-(--primary) transition-all duration-200 cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
