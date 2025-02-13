"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4">
        {/* Projects Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Projects</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/project1" className="hover:text-blue-400">
                Project 1
              </Link>
            </li>
            <li>
              <Link href="/project2" className="hover:text-blue-400">
                Project 2
              </Link>
            </li>
            <li>
              <Link href="/project3" className="hover:text-blue-400">
                Project 3
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@example.com</p>
          <p>Address: 123 Street, City, Country</p>
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
        <p>© 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
