// import Link from "next/link";
// import { AiOutlineDashboard } from "react-icons/ai";
// import {
//   BiBook,
//   BiEdit,
//   BiListCheck,
//   BiFolderOpen,
//   BiPlusCircle,
//   BiTask,
//   BiHome,
// } from "react-icons/bi";
// import { FaTasks } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <div className="dark:bg-gray-900  min-h-screen p-4 pt-12 rounded-xl">
//       <ul className="space-y-4">
//         <li>
//           <Link
//             href="/"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963]"
//           >
//             <BiHome className="h-5 w-5" />
//             <span>Home</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/hello"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963] "
//           >
//             <AiOutlineDashboard className="h-5 w-5" />
//             <span>Dashboard</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/blogs"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963] "
//           >
//             <BiBook className="h-5 w-5" />
//             <span>All Blog</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/blogPost"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963] "
//           >
//             <BiEdit className="h-5 w-5" />
//             <span>Blog Post</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/blogManage"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963] "
//           >
//             <BiListCheck className="h-5 w-5" />
//             <span>Blog Manage</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/allProject"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963] "
//           >
//             <BiFolderOpen className="h-5 w-5" />
//             <span>All Project</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/projectPost"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963]"
//           >
//             <BiPlusCircle className="h-5 w-5" />
//             <span>Project Post</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/ProjectManage"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963] "
//           >
//             <FaTasks className="h-5 w-5" />
//             <span>Project Management</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/message"
//             className="flex items-center space-x-2 p-3 rounded-md hover:bg-[#C51963] "
//           >
//             <BiTask className="h-5 w-5" />
//             <span>All Message</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  BiBook,
  BiEdit,
  BiFolderOpen,
  BiUser,
  BiPlusCircle,
  BiTask,
  BiHome,
} from "react-icons/bi";

const Sidebar = () => {
  const pathname = usePathname();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const img = localStorage.getItem('profileImage');
    if (img) {
      setProfileImage(img);
    }
  }, []);

  const menuItems = [
    { href: "/", icon: <BiHome className="h-5 w-5" />, label: "Home" },
    { href: "/hello", icon: <AiOutlineDashboard className="h-5 w-5" />, label: "Dashboard" },
    { href: "/dashboard/blogs", icon: <BiBook className="h-5 w-5" />, label: "All Blog" },
    { href: "/dashboard/blogPost", icon: <BiEdit className="h-5 w-5" />, label: "Blog Post" },
    { href: "/dashboard/profile", icon: <BiUser className="h-5 w-5" />, label: "Profile" },
    { href: "/dashboard/allProject", icon: <BiFolderOpen className="h-5 w-5" />, label: "All Project" },
    { href: "/dashboard/projectPost", icon: <BiPlusCircle className="h-5 w-5" />, label: "Project Post" },
    { href: "/dashboard/message", icon: <BiTask className="h-5 w-5" />, label: "All Message" },
  ];

  return (
    <div className="glass-card min-h-[calc(100vh-3rem)] rounded-3xl p-5">
      <Link href="/dashboard/profile" className="group flex items-center gap-3 border-b border-slate-200/70 pb-5 transition">
        <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-slate-900 text-white">
          {isClient && profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-semibold">AD</span>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">Admin Desk</p>
          <p className="text-xs text-slate-500">Manage content</p>
        </div>
      </Link>

      <p className="dashboard-label mt-6">Navigation</p>
      <ul className="mt-4 space-y-2 text-sm">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-[0_12px_30px_-20px_rgba(15,23,42,0.7)]"
                    : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
