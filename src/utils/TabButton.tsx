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
        "px-4 py-2 font-medium transition duration-300",
        active
          ? "text-[#C51963] border-b-2 border-blue-600"
          : "text-gray-600 hover:text-blue-600"
      )}
    >
      {children}
    </button>
  );
};

export default TabButton;
