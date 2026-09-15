"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/pages/not-found.tsx";

  return (
    <>
      {!hideLayout && <Navbar />} {children} {!hideLayout && <Footer />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
