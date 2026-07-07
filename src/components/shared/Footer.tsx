"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import img1 from "@/assets/images/ChatGPT_Image_May_12__2025__03_08_36_PM-removebg-preview.png";



export default function Footer() {
  return (
    <footer className="w-full bg-[#101114] text-slate-200 dark:bg-[#0b0d12]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Image src={img1} alt="Logo" width={160} height={160} />
          <p className="text-sm text-slate-400">
            Crafting clean, modern web experiences with care and clarity.
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-[#c27a52]">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>Phone: +01892927131</p>
            <p>
              Email:
              <span className="ml-2 font-semibold text-white">mdnaeemmiah@gmail.com</span>
            </p>
            <p>Address: Tolarbag, Mirpur-01, Dhaka, Bangladesh</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-[#c27a52]">Follow</h3>
          <div className="mt-4 flex gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-[#c27a52] hover:text-white"
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-[#c27a52] hover:text-white"
            >
              <Twitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-[#c27a52] hover:text-white"
            >
              <Instagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-[#c27a52] hover:text-white"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-slate-400 sm:px-6">
          <p>© 2026 Naeem. All rights reserved.</p>
          <p>Designed with care in Dhaka.</p>
        </div>
      </div>
    </footer>
  );
}
