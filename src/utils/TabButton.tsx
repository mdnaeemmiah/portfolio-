"use client";
import React from "react";
import clsx from "clsx";

interface TabButtonProps {
  children: React.ReactNode;
  selectTab: () => void;
  active: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ children, selectTab, active }) => {
  return (
    <button
      onClick={selectTab}
      className={clsx(
        "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300",
        active
          ? "border-[#c27a52] bg-[#f8ede3] text-slate-900"
          : "border-slate-200/70 text-slate-500 hover:border-slate-300 hover:text-slate-900"
      )}
    >
      {children}
    </button>
  );
};

export default TabButton;
