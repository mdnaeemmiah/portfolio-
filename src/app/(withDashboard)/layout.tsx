"use client";

import Sidebar from "@/components/shared/Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent px-4 py-8 md:px-10">
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col gap-8 md:flex-row">
      {/* Sidebar Toggle Button - Visible only on small screens */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 rounded-xl bg-slate-900 p-2 text-white shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu />
      </button>

      {/* Overlay - Visible only when sidebar is open on small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar - Hidden on small screens, toggleable */}
        <div
          className={`fixed left-0 top-0 z-40 h-full w-72 transition-transform md:sticky md:top-8 md:h-[calc(100vh-4rem)] md:w-[22%] ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <Sidebar />
        </div>

      {/* Main Content */}
        <div className="dashboard-shell flex-1 overflow-y-auto pt-8 md:pt-6">
          {children}
        </div>
      </div>
    </div>
  );
}