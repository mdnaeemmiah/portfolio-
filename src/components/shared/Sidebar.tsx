import Link from "next/link";
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
  return (
    <div className="bg-slate-100 min-h-screen p-4 pt-12 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BiHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/hello"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <AiOutlineDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BiBook className="h-5 w-5" />
            <span>All Blog</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogPost"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BiEdit className="h-5 w-5" />
            <span>Blog Post</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogManage"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BiListCheck className="h-5 w-5" />
            <span>Blog Manage</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/allProject"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BiFolderOpen className="h-5 w-5" />
            <span>All Project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projectPost"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BiPlusCircle className="h-5 w-5" />
            <span>Project Post</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/ProjectManage"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaTasks className="h-5 w-5" />
            <span>Project Management</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/message"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BiTask className="h-5 w-5" />
            <span>All Message</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
