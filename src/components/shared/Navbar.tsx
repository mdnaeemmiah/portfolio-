// /* eslint-disable @next/next/no-img-element */
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, UserCircle, Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { DialogTitle } from "@/components/ui/dialog";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// import { signOut } from "next-auth/react";
// import clsx from "clsx";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Image from "next/image";
// import img1 from "@/assets/images/ChatGPT_Image_May_12__2025__03_08_36_PM-removebg-preview.png";

// type UserProps = {
//   user?: {
//     name?: string | null;
//     email?: string | null;
//     image?: string | null;
//   };
// };

// export default function Navbar({ session }: { session: UserProps | null }) {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDarkMode(true);
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     if (darkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }
//     setDarkMode(!darkMode);
//   };

//   return (
//     <nav className="bg-gray-900 text-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full  z-50 transition-all">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image src={img1} alt="Description" width={80} height={80} />
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex gap-6 dark:text-white">
//           <Link
//             href="/"
//             className={clsx(
//               " hover:text-blue-600 border-b-2 transition-all duration-200",
//               pathname === "/"
//                 ? "text-[#C51963] border-blue-600"
//                 : "border-transparent text-white"
//             )}
//           >
//             Home
//           </Link>
//           <Link
//             href="/blog"
//             className={clsx(
//               "hover:text-blue-600  border-b-2 transition-all duration-200",
//               pathname === "/blog"
//                 ? "text-[#C51963] border-blue-600"
//                 : "border-transparent text-white"
//             )}
//           >
//             Blogs
//           </Link>
//           <Link
//             href="/project"
//             className={clsx(
//               "hover:text-blue-600  border-b-2 transition-all duration-200",
//               pathname.startsWith("/project")
//                 ? "text-[#C51963] border-blue-600"
//                 : "border-transparent text-white"
//             )}
//           >
//             Projects
//           </Link>
//           <Link
//             href="/contact-us"
//             className={clsx(
//               "hover:text-blue-600  border-b-2 transition-all duration-200",
//               pathname === "/contact-us"
//                 ? "text-[#C51963] border-blue-600"
//                 : "border-transparent text-white"
//             )}
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Right Section: Dark Mode Toggle & User Menu */}
//         <div className="flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white"
//           >
//             {darkMode ? <Sun size={24} /> : <Moon size={24} />}
//           </button>

//           {/* User Dropdown */}
//           <div className="hidden md:block">
//             {session?.user ? (
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
//                     {session.user.image ? (
//                       <img
//                         src={session.user.image}
//                         alt="User Avatar"
//                         className="w-8 h-8 rounded-full"
//                       />
//                     ) : (
//                       <UserCircle
//                         size={32}
//                         className="text-gray-600 dark:text-white"
//                       />
//                     )}
//                     <span className="text-teal-600 dark:text-white font-medium">
//                       {session.user.name || "User"}
//                     </span>
//                   </button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 absolute right-0 w-40">
//                   <DropdownMenuItem asChild>
//                     <Link
//                       href="/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
//                     >
//                       Dashboard
//                     </Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <button
//                       onClick={() => signOut()}
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left text-red-600"
//                     >
//                       Logout
//                     </button>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             ) : (
//               <Link href="/auth/login">
//                 <Button
//                   variant="default"
//                   className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                 >
//                   Login
//                 </Button>
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu size={24} />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="left"
//               className="p-4 dark:bg-gray-900 dark:text-white"
//             >
//               <DialogTitle>
//                 <VisuallyHidden>Navigation Menu</VisuallyHidden>
//               </DialogTitle>
//               <div className="flex flex-col gap-4 text-lg">
//                 <Link href="/" onClick={() => setOpen(false)}>
//                   Home
//                 </Link>
//                 <Link href="/blog" onClick={() => setOpen(false)}>
//                   Blogs
//                 </Link>
//                 <Link href="/project" onClick={() => setOpen(false)}>
//                   Projects
//                 </Link>
//                 <Link href="/contact-us" onClick={() => setOpen(false)}>
//                   Contact Us
//                 </Link>

//                 {session?.user ? (
//                   <>
//                     <Link
//                       href="/dashboard"
//                       onClick={() => setOpen(false)}
//                       className="mt-4 w-full"
//                     >
//                       Dashboard
//                     </Link>
//                     <button
//                       onClick={() => signOut()}
//                       className="mt-2 w-full text-left text-red-600"
//                     >
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <Link
//                     href="/auth/login"
//                     onClick={() => setOpen(false)}
//                     className="mt-4 w-full"
//                   >
//                     Login
//                   </Link>
//                 )}
//               </div>

//               {/* Dark Mode Toggle in Mobile Menu */}
//               <button
//                 onClick={toggleDarkMode}
//                 className="mt-6 w-full p-2 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
//               >
//                 {darkMode ? (
//                   <>
//                     <Sun size={24} className="mr-2" /> Light Mode
//                   </>
//                 ) : (
//                   <>
//                     <Moon size={24} className="mr-2" /> Dark Mode
//                   </>
//                 )}
//               </button>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, UserCircle, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import img1 from "@/assets/images/ChatGPT_Image_May_12__2025__03_08_36_PM-removebg-preview.png";
import Cookies from "js-cookie";
import { verifyToken } from "@/utils/veryfyToken";
// import { verifyToken } from "@/utils/verifyToken"; // ✅ Your token decoder

type DecodedUser = {
  email: string;
  role?: string;
  iat: number;
  exp: number;
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<DecodedUser | null>(null);

  useEffect(() => {
    // Theme setup
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Decode token to get user info
    const token =
      Cookies.get("accessToken") || localStorage.getItem("accessToken");
    if (token) {
      const decoded = verifyToken(token) as DecodedUser;
      if (decoded?.email) {
        // Optional: check expiry
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          Cookies.remove("accessToken");
          localStorage.removeItem("accessToken");
        }
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    Cookies.remove("accessToken");
    localStorage.removeItem("accessToken");
    setUser(null);
    window.location.href = "/auth/login";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-700/60 dark:bg-[#111319]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={img1}
            alt="Logo"
            width={56}
            height={56}
            className="logo-tint"
          />
          <div className="hidden sm:block">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c27a52]">
              Portfolio
            </p>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Naeem
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blogs" },
            { href: "/project", label: "Projects" },
            { href: "/contact-us", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "relative pb-1 text-slate-600 transition-all duration-200 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                pathname === href ||
                  (href === "/project" && pathname.startsWith("/project"))
                  ? "text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#c27a52]"
                  : "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c27a52] hover:after:w-full",
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="rounded-full border border-slate-200/70 bg-white p-2 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/60 dark:bg-[#171a22] dark:text-slate-200"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Auth Dropdown */}
          <div className="hidden md:block">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <UserCircle
                      size={32}
                      className="text-slate-700 dark:text-slate-200"
                    />
                    {/* <span className="text-teal-400">{user.email}</span> */}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-xl bg-white p-2 shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/hello"
                      className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-100"
                    >
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button
                      onClick={handleLogout}
                      className="block w-full rounded-lg px-4 py-2 text-left text-sm text-red-600 hover:bg-slate-100"
                    >
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/login">
                <Button className="rounded-full bg-slate-900 px-6 py-2 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 dark:bg-[#111319]">
              <DialogTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </DialogTitle>
              <div className="flex flex-col gap-4 text-lg text-slate-700 dark:text-slate-200">
                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/blog" onClick={() => setOpen(false)}>
                  Blogs
                </Link>
                <Link href="/project" onClick={() => setOpen(false)}>
                  Projects
                </Link>
                <Link href="/contact-us" onClick={() => setOpen(false)}>
                  Contact Us
                </Link>
                {user ? (
                  <>
                    <Link href="/hello" onClick={() => setOpen(false)}>
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-left text-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/auth/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                )}
              </div>
              <button
                onClick={toggleDarkMode}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/70 bg-white p-2 text-sm text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-[#171a22] dark:text-slate-200"
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
