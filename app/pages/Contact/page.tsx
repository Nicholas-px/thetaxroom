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

import client1 from "@/public/contact-client-1.png";
import client2 from "@/public/contact-client-2.png";
import client3 from "@/public/contact-client-3.png";
import client4 from "@/public/contact-client-4.png";
import client5 from "@/public/contact-client-5.png";

import Link from "next/link";
import Banner from "../Index/Banner/page";

export default function Contact() {
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
            Contact <span className="text-(--primary)">Us</span>
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
      <div className="dark-section">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="title text-center">
            <div>
              <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                <i className="bi bi-rocket-takeoff pe-4"></i>Get In Touch
              </h2>
            </div>
            <h1 className="text-6xl mt-3 font-semibold">Let Us Help You</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15">
            <div className="flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-(--primary) hover:text-(--text) transition-all duration-300">
              <div className="mt-3 w-15 h-15 rounded-full bg-(--primary) group-hover:bg-(--text) transition-all duration-300 px-5 flex items-center justify-center">
                <i className="bi bi-geo-alt text-(--text) group-hover:text-(--primary) text-3xl transition-all duration-300"></i>
              </div>
              <div>
                <h2 className="text-4xl group-hover:text-(--text) transition-all duration-300">
                  Main Office
                </h2>

                <p className="text-gray-300 my-2 group-hover:text-(--text) transition-all duration-300">
                  Plot 3511 Block 46 {" "}
                  Mapambano rd,Nzasa st
                </p>

                <Link
                  href="/"
                  className="text-(--primary) border-b border-(--primary) group-hover:border-(--text) font-semibold group-hover:text-(--text) transition-all duration-300"
                >
                  Find Location
                </Link>
              </div>
            </div>

            <div className="flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-(--primary) hover:text-(--text) transition-all duration-300">
              <div className="mt-3 w-15 h-15 rounded-full bg-(--primary) group-hover:bg-(--text) px-5 transition-all duration-300 flex items-center justify-center">
                <i className="bi bi-envelope-at text-(--text) group-hover:text-(--primary) text-3xl transition-all duration-300"></i>
              </div>
              <div>
                <h2 className="text-4xl group-hover:text-(--text) transition-all duration-300">
                  Email Address
                </h2>

                <p className="text-gray-300 mt-3 group-hover:text-(--text) transition-all duration-300">
                  george.ndekwa@finitax.co.tz
                </p>

                <p className="text-gray-300 mb-3 group-hover:text-(--text) transition-all duration-300">
                  thetaxroom.co.tz
                </p>

                <Link
                  href="/"
                  className="text-(--primary) border-b border-(--primary) group-hover:border-(--text) font-semibold group-hover:text-(--text) transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-(--primary) hover:text-(--text) transition-all duration-300">
              <div className="mt-3 w-15 h-15 rounded-full bg-(--primary) group-hover:bg-(--text) px-5 transition-all duration-300 flex items-center justify-center">
                <i className="bi bi-telephone-inbound text-(--text) group-hover:text-(--primary) text-3xl transition-all duration-300"></i>
              </div>
              <div>
                <h2 className="text-4xl group-hover:text-(--text) transition-all duration-300">
                  Phone Number
                </h2>

                <p className="text-gray-300 mt-3 group-hover:text-(--text) transition-all duration-300">
                  +255 794 577 881
                </p>

                <p className="text-gray-300 mb-3 group-hover:text-(--text) transition-all duration-300">
                  +255 758 003 633
                </p>

                <Link
                  href="/"
                  className="text-(--primary) border-b border-(--primary) group-hover:border-(--text) font-semibold group-hover:text-(--text) transition-all duration-300"
                >
                  Contact Us Today!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="light-section wave-wrapper-section">
        <div className="px-[8%] lg:px-[16%] py-20 pt-40">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="w-full lg:w-1/2">
              <div className="title">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                    <i className="bi bi-rocket-takeoff pe-4"></i>Contact Us
                  </h2>
                </div>

                <h1 className="text-6xl mt-3 mb-8 font-semibold">
                  Have questions? Don't hesitate to{" "}
                  <span className="text-(--primary)"> contact us </span>
                </h1>

                <p className="my-5">
                  Purpose of an introduction is to grab the audience's
                  attention, their interest, provide a preview of the value or
                  insights.
                </p>

                <div className="my-5 mt-10 flex items-center gap-3">
                  <div className="flex items-center">
                    <Image
                      src={client1}
                      alt="client1"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={client2}
                      alt="client2"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={client3}
                      alt="client3"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={client4}
                      alt="client4"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={client5}
                      alt="client5"
                      className="rounded-full -me-3"
                    />
                  </div>

                  <div className="flex flex-col gap-2 ms-6">
                    <div className="flex items-center gap-1">
                      <i className="bi bi-star-fill text-(--primary)"></i>
                      <i className="bi bi-star-fill text-(--primary)"></i>
                      <i className="bi bi-star-fill text-(--primary)"></i>
                      <i className="bi bi-star-fill text-(--primary)"></i>
                      <i className="bi bi-star-half text-(--primary)"></i>
                    </div>
                    <h2>2.5k+ reviews (4.95 of 5)</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-(--gray-color) p-5 rounded-2xl">
                <div className="bg-(--gray-light) p-5 rounded-2xl">
                  <h2 className="text-3xl">Get In Touch</h2>

                  <div className="border-b py-2 border-dashed border-(--primary)/30"></div>

                  <div className="mt-5">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="flex flex-col gap-1">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="outline-none bg-(--gray-color) px-4 py-3 rounded-lg border border-transparent focus:border-(--primary) transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-1 mt-3">
                        <label>E-mail</label>
                        <input
                          type="text"
                          placeholder="Enter Your Email"
                          className="outline-none bg-(--gray-color) px-4 py-3 rounded-lg border border-transparent focus:border-(--primary) transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-1 mt-3">
                        <label>Phone</label>
                        <input
                          type="text"
                          placeholder="Enter Your Phone"
                          className="outline-none bg-(--gray-color) px-4 py-3 rounded-lg border border-transparent focus:border-(--primary) transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-1 mt-3">
                        <label>Message</label>
                        <textarea
                          rows={4}
                          placeholder="Write your message"
                          className="outline-none bg-(--gray-color) px-4 py-3 rounded-lg border border-transparent focus:border-(--primary) transition-all duration-300 resize-none"
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn2 mt-4 w-fit">
                        Send Message <i className="bi bi-arrow-right-short"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="light-section">
        <Banner />
      </div>
    </>
  );
}
