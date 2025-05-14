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
import { AiOutlineDashboard } from "react-icons/ai";
import {
  BiBook,
  BiEdit,
  BiListCheck,
  BiFolderOpen,
  BiPlusCircle,
  BiTask,
  BiHome,
} from "react-icons/bi";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", icon: <BiHome className="h-5 w-5" />, label: "Home" },
    { href: "/hello", icon: <AiOutlineDashboard className="h-5 w-5" />, label: "Dashboard" },
    { href: "/dashboard/blogs", icon: <BiBook className="h-5 w-5" />, label: "All Blog" },
    { href: "/dashboard/blogPost", icon: <BiEdit className="h-5 w-5" />, label: "Blog Post" },
    { href: "/dashboard/blogManage", icon: <BiListCheck className="h-5 w-5" />, label: "Blog Manage" },
    { href: "/dashboard/allProject", icon: <BiFolderOpen className="h-5 w-5" />, label: "All Project" },
    { href: "/dashboard/projectPost", icon: <BiPlusCircle className="h-5 w-5" />, label: "Project Post" },
    { href: "/dashboard/ProjectManage", icon: <FaTasks className="h-5 w-5" />, label: "Project Management" },
    { href: "/dashboard/message", icon: <BiTask className="h-5 w-5" />, label: "All Message" },
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen p-4 pt-12 rounded-xl">
      <ul className="space-y-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-2 p-3 rounded-md ${
                  isActive ? "bg-[#C51963] text-white" : "hover:bg-[#C51963]"
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
