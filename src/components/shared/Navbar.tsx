/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, UserCircle, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

export default function Navbar({ session }: { session: UserProps | null }) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-600">My Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 dark:text-white">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-300">Home</Link>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-300">Blogs</Link>
          <Link href="/project" className="hover:text-blue-600 dark:hover:text-blue-300">Projects</Link>
          <Link href="/contact-us" className="hover:text-blue-600 dark:hover:text-blue-300">Contact Us</Link>
        </div>

        {/* Right Section: Dark Mode Toggle & User Menu */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* User Dropdown */}
          <div className="hidden md:block">
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    {session.user.image ? (
                      <img
                        src={session.user.image}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <UserCircle size={32} className="text-gray-600 dark:text-white" />
                    )}
                    <span className="text-teal-600 dark:text-white font-medium">
                      {session.user.name || "User"}
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 absolute right-0 w-40">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button
                      onClick={() => signOut()}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left text-red-600"
                    >
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/login">
                <Button variant="default" className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C51963] hover:scale-105 transform transition duration-300">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 dark:bg-gray-900 dark:text-white">
              <DialogTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </DialogTitle>
              <div className="flex flex-col gap-4 text-lg">
                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/blog" onClick={() => setOpen(false)}>Blogs</Link>
                <Link href="/project" onClick={() => setOpen(false)}>Projects</Link>
                <Link href="/contact-us" onClick={() => setOpen(false)}>Contact Us</Link>

                {session?.user ? (
                  <>
                    <Link href="/dashboard" onClick={() => setOpen(false)} className="mt-4 w-full">Dashboard</Link>
                    <button
                      onClick={() => signOut()}
                      className="mt-2 w-full text-left text-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/auth/login" onClick={() => setOpen(false)} className="mt-4 w-full">Login</Link>
                )}
              </div>

              {/* Dark Mode Toggle in Mobile Menu */}
              <button
                onClick={toggleDarkMode}
                className="mt-6 w-full p-2 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
              >
                {darkMode ? (
                  <>
                    <Sun size={24} className="mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={24} className="mr-2" /> Dark Mode
                  </>
                )}
              </button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
