import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Playfair_Display } from "next/font/google";
import "./globals.css";
// import Navbar from "./Components/Nav/Navbar";
// import Footer from "./Components/Footer/Footer";

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font--kanit",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Tax Room",
  description: "Podcasting made simple",
  icons: {
    icon: "/tax-room-logo.png",
  },
};

import { Toaster } from "react-hot-toast";
import ClientWrapper from "./Components/ClientWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${playfairDisplay.variable}`}
      >
        {/* <Navbar /> */}
        <ClientWrapper>{children}</ClientWrapper>
        {/* <Footer /> */}

        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
