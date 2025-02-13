"use client";

import Sidebar from "@/components/shared/Sidebar";
// import type { Metadata } from "next";
import { useState } from "react";
import { Menu } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Next Auth Dashboard",
//   description: "Generated by create next app",
// };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar - Hidden on small screens, toggleable */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/50 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed md:static top-0 left-0 w-64 h-full bg-white transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-[20%]`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-100 rounded-xl p-4 md:ml-2">{children}</div>
    </div>
  );
}
