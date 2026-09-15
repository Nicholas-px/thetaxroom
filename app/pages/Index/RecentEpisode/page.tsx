import Image from "next/image";
import bannerImg from "@/public/episode-card-banner.png";
import Link from "next/link";

export default function RecentEpisode() {
  return (
    <>
      <div className="dark-section">
        <div className="px-[8%] lg:px-[16%] py-30 pb-0 md:pb-10">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="w-full lg:w-1/1">
              <div className="title flex flex-col gap-2">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                    <i className="bi bi-rocket-takeoff pe-4"></i>Latest Tax Briefs
                  </h2>
                </div>
                <h1 className="text-6xl lg:text-7xl font-semibold mt-4">
                  Explore Our Latest Talks
                </h1>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <p>
                Dive into our latest episodes breaking down tax laws, compliance frameworks, 
                and business strategies tailored for Tanzanian entrepreneurs and finance professionals.
              </p>
              <Link href="/pages/Episodes">
                <button className="btn btn2 mt-4" style={{ fontWeight: 500 }}>
                  View All Episodes <i className="bi bi-arrow-right-short"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 px-[8%] lg:px-[16%] pb-30">
          <div className="episodeBanner bg-[#FFCA79] px-5 rounded-2xl pb-5 lg:pb-0">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-0 lg:gap-5">
              <div className="w-full lg:w-1/2">
                <Image
                  src={bannerImg}
                  alt="bannerImg"
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap items-center gap-5 py-5">
                  <Link href="/pages/Episodes">
                    <h2 className="text-(--text) hover:text-black">
                      <i className="bi bi-mic"></i> George Ndekwa-CPA
                    </h2>
                  </Link>

                  <h2 className="text-(--text)">
                    <i className="bi bi-clock pe-1"></i> 30min
                  </h2>

                  <div className="flex items-center gap-3">
                    <i className="bi bi-balloon-heart me-3 text-(--text) text-xl"></i>
                    <div className="music-waves"></div>
                  </div>
                </div>
                <h2 className="text-(--text) text-4xl font-semibold">
                  Decoding SME Tax Challenges and Compliance Solutions
                </h2>
                <p className="text-(--text) my-4 tracking-wide">
                  Dive into practical frameworks for tax audit defense 
                  and communicating effectively with regulatory authorities.
                </p>
                <div className="flex flex-wrap justify-between items-center gap-5">
                  <Link
                    href="/pages/Episodes"
                    className="flex items-center gap-2 group"
                  >
                    <i className="bi bi-play p-4 bg-black rounded-full flex items-center justify-center text-(--primary) text-2xl group-hover:bg-(--second) group-hover:text-white cursor-pointer transition-all duration-200"></i>
                    <h2 className="text-xl underline text-black group-hover:text-(--second) transition-all duration-200">
                      Listen Now
                    </h2>
                  </Link>
                  <span className="bg-black text-(--primary) px-5 py-3 rounded-full text-xl">
                    Episode 01
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
            <div className="w-full lg:w-1/2">
              <div className="p-6 rounded-2xl bg-(--gray-light)">
                <div className="flex flex-wrap  items-center gap-5">
                  <Link href="/pages/Episodes">
                    <h2 className="text-gray-300">
                      <i className="bi bi-mic"></i> Angellica Donald
                    </h2>
                  </Link>
                  <h2 className="text-gray-300">
                    <i className="bi bi-clock pe-1 "></i> 30min
                  </h2>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-balloon-heart me-3 text-gray-300 text-xl"></i>
                    <div className="music-waves2"></div>
                  </div>
                </div>
                <h2 className="text-gray-300 text-3xl md:text-4xl font-semibold">
                  Understanding modern electronic tax administration and its impact on small businesses and startups.
                </h2>
                <p className="text-gray-300 my-4 tracking-wide">
                  Embark on a journey of unexplored wisdom as we delve into
                  fascinating topics that challenge financial literacy and entrepreneurship
                </p>
                <div className="flex flex-wrap justify-between items-center gap-5">
                  <Link
                    href="/pages/Episodes"
                    className="flex items-center gap-2 group"
                  >
                    <i className="bi bi-play p-4 bg-(--primary) rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-(--second) group-hover:text-white cursor-pointer transition-all duration-200"></i>
                    <h2 className="text-xl underline text-gray-300 group-hover:text-(--second) transition-all duration-200">
                      Listen Now
                    </h2>
                  </Link>
                  <span className="bg-(--gray-color) text-(--primary) px-5 py-3 rounded-full text-xl">
                    Episode 02
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="p-6 rounded-2xl bg-(--gray-light)">
                <div className="flex flex-wrap items-center gap-5">
                  <Link href="/pages/Episodes">
                    <h2 className="text-gray-300">
                      <i className="bi bi-mic"></i> Nicholas Malembo
                    </h2>
                  </Link>
                  <h2 className="text-gray-300">
                    <i className="bi bi-clock pe-1 "></i> 1hrs.
                  </h2>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-balloon-heart me-3 text-gray-300 text-xl"></i>
                    <div className="music-waves2"></div>
                  </div>
                </div>
                <h2 className="text-gray-300 text-3xl md:text-4xl font-semibold">
                  Behind the Scenes:To the beginning and the end of the exclusives room
                </h2>
                <p className="ttext-gray-300 my-4 tracking-wide">
                  Embark The Journey with our team on countless prepartion 
                  Trials to the final production of your favourite show.
                </p>
                <div className="flex flex-wrap justify-between items-center gap-5">
                  <Link
                    href="/pages/Episodes"
                    className="flex items-center gap-2 group"
                  >
                    <i className="bi bi-play p-4 bg-(--primary) rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-(--second) group-hover:text-white cursor-pointer transition-all duration-200"></i>
                    <h2 className="text-xl underline text-gray-300 group-hover:text-(--second) transition-all duration-200">
                      Listen Now
                    </h2>
                  </Link>
                  <span className="bg-(--gray-color) text-(--primary) px-5 py-3 rounded-full text-xl">
                    Episode 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
