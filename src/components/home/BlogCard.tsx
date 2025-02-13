import { Blog } from "@/types"; // Import your Blog interface
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

// Defining props for BlogCard
interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  // Handle image source
  const imageSrc = blog.image && blog.image.trim() !== "1" ? blog.image : null; // Set to null if empty string

  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <figure>
        {/* Render Image only if src is valid */}
        {imageSrc ? (
          <Image
            src={imageSrc} // Valid image URL
            width={600}
            height={400}
            alt="blog image"
            className="rounded-t-lg h-64 object-cover"
          />
        ) : (
          <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-600">
            No Image Available
          </div>
        )}
      </figure>
      <div className="p-6">
        {/* Blog Category */}
        <p className="flex items-center justify-center text-teal-600 bg-teal-100 w-32 rounded-full py-1 text-sm">
          <FaCalendar className="mr-2" />
          {blog.category || "Uncategorized"} {/* Display category or fallback */}
        </p>
        
        {/* Blog Title */}
        <h2 className="text-xl font-bold mt-4">
          {blog.title.length > 30 ? blog.title.slice(0, 30) + "..." : blog.title}
        </h2>
        
        {/* Blog Content Preview */}
        <p className="text-gray-400 mt-2">
          {blog.content.length > 100 ? blog.content.slice(0, 60) + "..." : blog.content}
          <Link href={`/blog/${blog._id}`} className="text-teal-600 ml-1">
            Read More
          </Link>
        </p>
        
        {/* Author Info and Likes */}
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            {/* Author Image */}
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/219/219986.png" // Placeholder image for author
                width={32}
                height={32}
                alt="author image"
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-500">{blog.author || "Unknown Author"}</span>
          </div>
          
          {/* Likes Count */}
          <div className="flex items-center text-sm text-gray-700">
            <AiFillLike className="text-teal-600 text-xl mr-1" />
            {blog.likes || 0} Likes {/* Display the like count, defaulting to 0 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
