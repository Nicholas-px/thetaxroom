"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/tax-room-logo.png";
import menuDot from "@/public/Menu-dot.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Episodes",
    href: "/pages/Episodes",
    dropdown: [
      { label: "Latest Episodes", href: "/pages/Episodes/LatestEpisode" },
      { label: "Favorite Episodes", href: "/pages/Episodes/FavoriteEpisode" },
      { label: "Episodes Details", href: "/pages/Episodes/2" },
    ],
  },
  { label: "Blogs", href: "/pages/Blogs" },
  {
    label: "Pages",
    href: "/pages/About",
    dropdown: [
      { label: "About", href: "/pages/About" },
      { label: "Host Profiles", href: "/pages/HostProfile" },
      { label: "Pricing Plan", href: "/pages/Pricing" },
      { label: "Faq's", href: "/pages/Faqs" },
      { label: "Contact Us", href: "/pages/Contact" },
      { label: "Page404", href: "/pages/not-found.tsx" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // Login & Register Modal
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* NavBar  */}
      <div
        className={`px-[8%] lg:px-[16%] fixed top-0 left-0 w-full z-50 navbar transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center gap-5 py-3">
          <div className="flex items-center gap-8">
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
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <nav className="hidden lg:flex space-x-6 menu-link relative z-40">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className={`flex Circular-font text-lg font-medium ${
                        pathname === link.href
                          ? "text-white underline font-semibold"
                          : "text-white"
                      } items-center gap-1 hover:text-(--primary)`}
                    >
                      {link.label}{" "}
                      <Image
                        src={menuDot}
                        alt="MenuDot"
                        className="invert brightness-100 grayscale"
                      />
                    </Link>

                    {/* DropMenu Section  */}
                    <div className="absolute left-0 top-full hidden group-hover:block bg-(--gray-color) shadow-xl p-2  rounded-lg min-w-[230px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`flex items-center gap-2 px-4 py-1 rounded-md font-medium text-lg ${
                            pathname === item.href
                              ? "text-white underline font-semibold"
                              : "text-white"
                          } hover:text-(--primary) hover:translate-x-1 transition-all duration-200`}
                        >
                          <Image
                            src={menuDot}
                            alt="MenuDot"
                            className="invert brightness"
                          />{" "}
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`flex gap-2 text-lg font-medium ${
                      pathname === link.href
                        ? "text-white font-semibold"
                        : "text-white"
                    } hover:text-(--primary)`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* Right Section  */}
          <div className="flex items-center gap-4 nav-right">
            <button
              className="btn btn1"
              onClick={() => {
                setIsLogin(true);
                setShowModal(true);
              }}
            >
              Login <i className="bi bi-arrow-right-short"></i>
            </button>

            <button
              className="btn btn2"
              onClick={() => {
                setIsLogin(false);
                setShowModal(true);
              }}
            >
              Register <i className="bi bi-arrow-right-short"></i>
            </button>

            {/* Mobile bars  */}
            <button
              className="lg:hidden flex flex-col gap-[5px]"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`block w-6 h-[3px] bg-white transition-all ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[3px] bg-white transition-all ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[3px] bg-white transition-all ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu  */}
          <div
            className={`lg:hidden fixed top-[72px] left-0 w-full z-50 transition-all duration-300 ${
              open
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-6"
            }`}
          >
            <div className="mx-[5%] rounded-2xl bg-(--body) shadow-2xl border border-white/10">
              <nav className="flex flex-col px-6 py-6 gap-5">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div
                      key={link.label}
                      className="border-b border-white/10 pb-3"
                    >
                      {/* Parent  */}
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex justify-between items-center w-full text-white text-lg Circular-font tracking-wide"
                      >
                        <span>{link.label}</span>
                        <span
                          className={`transition-all duration-300 ${
                            openDropdown === link.label
                              ? "rotate-90 text-(--primary)"
                              : "opacity-100"
                          }`}
                        >
                          <Image
                            src={menuDot}
                            alt="menuDot"
                            className="invert brightness"
                          />
                        </span>
                      </button>

                      {/* Dropdown  */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openDropdown === link.label
                            ? "max-h-96 mt-3"
                            : "max-h-0"
                        }`}
                      >
                        <div className="flex flex-col gap-3">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="text-white/80 text-base hover:text-(--primary) ps-3 pb-2 border-s border-e border-white/50 rounded-sm hover:translate-x-1 transition-all"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between text-white border-b border-white/10 text-lg Circular-font tracking-wide hover:text-(--primary) transition-all"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </nav>
            </div>
          </div>
        </div>

        {/* Login / Register Modal  */}
        {showModal && (
          <div className="fixed inset-0 w-full h-screen z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative bg-[#2D333C] border border-white/10 rounded-3xl p-10 w-[450px] md:w-[500px] shadow-2xl animate-fadeIn">
              {/* Close */}
              <button
                className="absolute top-5 right-5 text-4xl cursor-pointer text-white hover:text-(--primary) transition-all"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              {/* Title  */}
              <h2 className="text-3xl font-semibold mb-8 text-white">
                {isLogin ? "Login to Your Account" : "Register Your Account"}
              </h2>

              {/* Form  */}
              <form className="flex flex-col gap-4">
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-(--primary) focus:outline-none transition-all"
                    required
                  />
                )}

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-(--primary) focus:outline-none transition-all"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-(--primary) focus:outline-none transition-all"
                  required
                />

                {/* Submit  */}
                <button
                  type="submit"
                  className="w-full mt-3 bg-(--primary) text-black py-3 rounded-xl font-semibold hover:bg-orange-300 transition-all cursor-pointer"
                >
                  {isLogin ? "Login Now" : "Register Now"}
                </button>
              </form>

              {/* Switch Auth  */}
              <p className="text-center text-sm mt-4 text-white/70 font-semibold">
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="text-(--primary) cursor-pointer hover:underline transition-all"
                      onClick={() => setIsLogin(false)}
                    >
                      Register Here{" "}
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-(--primary) cursor-pointer hover:underline transition-all"
                      onClick={() => setIsLogin(true)}
                    >
                      Login Here{" "}
                    </button>
                  </>
                )}
              </p>

              {/* Footer  */}
              <p className="text-center text-sm text-white/50 pt-4 mt-6 border-t border-white/10">
                By Signing in or signing up to <strong>The Tax Room</strong>,
                you agree to our{" "}
                <Link href="/" className="text-(--primary) hover:underline">
                  Terms Of Use
                </Link>{" "}
                and{" "}
                <Link href="/" className="text-(--primary) hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
