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
    <div className="glass-card overflow-hidden">
      <figure>
        {/* Render Image only if src is valid */}
        {imageSrc ? (
          <Image
            src={imageSrc} // Valid image URL
            width={600}
            height={400}
            alt="blog image"
            className="h-56 w-full object-cover"
          />
        ) : (
          <div className="flex h-56 items-center justify-center bg-slate-100 text-slate-500">
            No Image Available
          </div>
        )}
      </figure>
      <div className="space-y-4 p-6">
        {/* Blog Category */}
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c27a52]">
          <FaCalendar className="text-sm" />
          {blog.category || "Uncategorized"}
        </p>

        <div className="text-left">
          {/* Blog Title */}
          <h2 className="text-xl font-semibold text-slate-900">
            {blog.title.length > 30
              ? blog.title.slice(0, 30) + "..."
              : blog.title}
          </h2>

          {/* Blog Content Preview */}
          <p className="text-sm text-slate-600">
            {blog.content.length > 100
              ? blog.content.slice(0, 60) + "..."
              : blog.content}
            <Link href={`/blog/${blog._id}`} className="ml-1 text-slate-900 underline underline-offset-4">
              Read More
            </Link>
          </p>
        </div>

        {/* Author Info and Likes */}
        <div className="flex items-center justify-between border-t border-slate-200/70 pt-4 text-sm">
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {"Unknown Author"}
            </span>
          </div>

          {/* Likes Count */}
          <div className="flex items-center text-xs text-slate-600">
            <AiFillLike className="mr-1 text-lg text-[#c27a52]" />
            {0} Likes {/* Display the like count, defaulting to 0 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
