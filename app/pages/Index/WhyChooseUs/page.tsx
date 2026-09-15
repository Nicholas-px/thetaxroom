import Image from "next/image";
import WhyChooseUsImg1 from "@/public/why-choose-1.png";
import WhyChooseUsImg2 from "@/public/why-choose-2.png";
import WhyChooseUsImg3 from "@/public/why-choose-3.png";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <>
      <div className="light-section">
        <div className="px-[8%] lg:px-[16%] py-30">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="whyChooseUs-img flex items-end gap-5">
                <Image
                  src={WhyChooseUsImg1}
                  alt="WhyChooseUsImg"
                  className="w-full h-fit border-t-2 border-(--primary) pt-5"
                />

                <Image
                  src={WhyChooseUsImg2}
                  alt="WhyChooseUsImg"
                  className="w-full h-fit"
                />

                <Image src={WhyChooseUsImg3} alt="WhyChooseUsImg" />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="title flex flex-col gap-2">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                    <i className="bi bi-rocket-takeoff pe-4"></i>Why Choose Us
                  </h2>
                </div>

                <h1 className="text-5xl lg:text-6xl font-semibold mt-7 mb-5">
                  Bridging the Tax Knowledge Gap.
                </h1>
              </div>

              <p className="my-5 tracking-wider">
                 Our platform empowers Tanzanian businesses, startups, and professionals with 
                 the knowledge needed to ensure voluntary compliance and foster financial growth..
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b  border-dashed border-(--primary-light) pb-6 pt-5">
                <h2 className="text-lg flex items-center gap-2">
                  <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-(--primary) rounded-full"></i>
                  Expert Led Discussions
                </h2>

                <h2 className="text-lg flex items-center gap-2">
                  <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-(--primary) rounded-full"></i>
                  Practical Compliance Guides
                </h2>

                <h2 className="text-lg flex items-center gap-2">
                  <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-(--primary) rounded-full"></i>
                  Subscribe and Get to Listen Offline
                </h2>

                <h2 className="text-lg flex items-center gap-2">
                  <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-(--primary) rounded-full"></i>
                  Multi-Format Learning
                </h2>
              </div>

              <div className="flex items-center gap-5">
                <button className="btn btn2" style={{ fontWeight: 500 }}>
                  Join the Community <i className="bi bi-arrow-right-short"></i>
                </button>

                <Link
                  href="/pages/About"
                  className="flex items-center gap-2 group"
                >
                  <i className="bi bi-play p-4 bg-(--primary) rounded-full flex items-center justify-center text-black text-2xl group-hover:text-white cursor-pointer transition-all duration-200"></i>

                  <h2 className="text-xl underline text-(--primary) group-hover:text-(--second) transition-all duration-200">
                    Meet the Host
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
