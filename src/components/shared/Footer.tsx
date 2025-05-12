"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import img1 from "@/assets/images/ChatGPT_Image_May_12__2025__03_08_36_PM-removebg-preview.png";



export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4">
          <div className="flex items-center gap-2">
          <Image src={img1} alt="Description" width={100} height={100} />
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Phone: + 01892927131</p>
          <p >Email:<span className="text-[#EF1F76] font-semibold hover:underline"> mdnaeemmiah@gmail.com</span></p>
          <p>Address: Tolarbag, Mirpur-01,Dhaka, Bangladesh</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Twitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Instagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>© 2024 All Rights Reserved By Naeem</p>
      </div>
    </footer>
  );
}
