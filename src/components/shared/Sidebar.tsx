import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaBook, FaPen, FaClipboardList, FaProjectDiagram, FaPlusSquare, FaTasks, FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 pt-12 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <MdDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaBook className="h-5 w-5" />
            <span>All Blog</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogPost"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaPen className="h-5 w-5" />
            <span>Blog Post</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogManage"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaClipboardList className="h-5 w-5" />
            <span>Blog Manage</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/allProject"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaProjectDiagram className="h-5 w-5" />
            <span>All Project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projectPost"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaPlusSquare className="h-5 w-5" />
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
            href="/"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
