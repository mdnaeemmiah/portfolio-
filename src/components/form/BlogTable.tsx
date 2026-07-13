"use client";

import {
  useDeleteBlogPostMutation,
  useGetAllBlogPostsQuery,
  useUpdateBlogPostMutation,
} from "@/redux/features/blog/blogApi";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { toast as sonnerToast } from "sonner";
import { Trash2 } from "lucide-react";
import { FiEdit } from "react-icons/fi";

interface BlogPost {
  _id: string;
  image: string;
  title: string;
  category: string;
  content?: string;
}

type ApiErrorShape = {
  data?: {
    message?: string;
  };
};

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/db9egbkam/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "naeemmiah";

const BlogTable = () => {
  const { data, error, isLoading, refetch } =
    useGetAllBlogPostsQuery(undefined);
  const [deleteBlogPost] = useDeleteBlogPostMutation();
  const [updateBlogPost] = useUpdateBlogPostMutation();
  const blogPosts: BlogPost[] = Array.isArray(data?.data) ? data?.data : [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [editPost, setEditPost] = useState<{
    title: string;
    category: string;
    content: string;
    image: string;
    id: string;
  } | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openUpdateModal = (post: BlogPost) => {
    setEditPost({
      title: post.title,
      category: post.category,
      content: post.content || "",
      image: post.image || "",
      id: post._id,
    });
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setEditPost(null);
  };

  const confirmDelete = (message: string) =>
    new Promise<boolean>((resolve) => {
      sonnerToast(message, {
        className: "sonner-toast",
        style: {
          marginTop: "28vh",
          minWidth: "420px",
          maxWidth: "520px",
          padding: "20px 24px",
          borderRadius: "22px",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          gap: "14px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(249,245,240,0.98))",
          boxShadow: "0 30px 60px -40px rgba(15,23,42,0.55)",
        },
        action: {
          label: "Delete",
          onClick: () => resolve(true),
        },
        cancel: {
          label: "Cancel",
          onClick: () => resolve(false),
        },
        actionButtonStyle: {
          backgroundColor: "#22c55e",
          color: "#ffffff",
          borderRadius: "999px",
          padding: "10px 20px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        },
        cancelButtonStyle: {
          backgroundColor: "#ef4444",
          color: "#ffffff",
          borderRadius: "999px",
          padding: "10px 20px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        },
      });
    });

  const handleDelete = async (id: string) => {
    const accepted = await confirmDelete("Delete this blog post?");
    if (!accepted) return;
    try {
      await deleteBlogPost(id).unwrap();
      toast.success("Blog post deleted successfully!");
      refetch();
    } catch (deleteError: unknown) {
      console.error("Error deleting post:", deleteError);
      const message = (deleteError as ApiErrorShape)?.data?.message;
      toast.error(message || "Error deleting post");
    }
  };

  const handleImageUpload = async (file: File) => {
    const imageFormData = new FormData();
    imageFormData.append("file", file);
    imageFormData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      setIsUploading(true);
      const response = await axios.post(CLOUDINARY_URL, imageFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const uploadedUrl = response.data.secure_url as string;
      setEditPost((prev) => (prev ? { ...prev, image: uploadedUrl } : prev));
      toast.success("Image uploaded successfully!");
    } catch (uploadError) {
      console.error("Error uploading image:", uploadError);
      toast.error("Error uploading image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPost?.id) return toast.error("Post ID is missing!");

    try {
      const updatedData = {
        title: editPost.title,
        category: editPost.category,
        content: editPost.content,
        image: editPost.image,
      };
      await updateBlogPost({ id: editPost.id, updatedData }).unwrap();
      toast.success("Blog post updated successfully!");
      refetch();
      closeUpdateModal();
    } catch (updateError: unknown) {
      console.error("Error updating post:", updateError);
      const message = (updateError as ApiErrorShape)?.data?.message;
      toast.error(message || "Error updating post");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog posts.</p>;

  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <div className="flex flex-col gap-2 border-b border-slate-200/70 pb-4">
          <p className="section-kicker">Blogs</p>
          <h2 className="text-2xl font-semibold text-slate-900">
            All Blog Posts
          </h2>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th className="dashboard-th">Image</th>
                <th className="dashboard-th">Title</th>
                <th className="dashboard-th">Category</th>
                <th className="dashboard-th">Edit</th>
                <th className="dashboard-th">Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <tr
                    key={post._id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-700/40"
                  >
                    <td className="dashboard-td">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-xl object-cover"
                      />
                    </td>
                    <td className="dashboard-td font-semibold text-slate-900">
                      {post.title}
                    </td>
                    <td className="dashboard-td">{post.category}</td>
                    <td className="dashboard-td">
                      <button
                        onClick={() => openUpdateModal(post)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                      >
                        <FiEdit size={16} />
                      </button>
                    </td>
                    <td className="dashboard-td">
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rose-200 text-rose-500 transition hover:border-rose-300 hover:text-rose-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="dashboard-td text-center text-slate-500"
                  >
                    No blog posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center">
        <nav className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 shadow-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              currentPage === 1
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : "bg-[#c27a52] text-white hover:bg-[#b86f47]"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                currentPage === number
                  ? "bg-[#c27a52] text-white"
                  : "bg-white text-slate-500 hover:bg-slate-100"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : "bg-[#c27a52] text-white hover:bg-[#b86f47]"
            }`}
          >
            Next
          </button>
        </nav>
      </div>

      {isModalOpen && editPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">Update</p>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Update Blog Post
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Keep the title and summary sharp, then refresh the hero image
                  if needed.
                </p>
              </div>
              <button
                type="button"
                onClick={closeUpdateModal}
                className="rounded-full border border-slate-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 hover:border-slate-300"
              >
                Close
              </button>
            </div>

            <form
              onSubmit={handleUpdateSubmit}
              className="mt-6 grid gap-5 md:grid-cols-2"
            >
              <div className="space-y-2">
                <label htmlFor="title" className="dashboard-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={editPost.title}
                  onChange={(e) =>
                    setEditPost({ ...editPost, title: e.target.value })
                  }
                  className="dashboard-input"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="dashboard-label">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={editPost.category}
                  onChange={(e) =>
                    setEditPost({ ...editPost, category: e.target.value })
                  }
                  className="dashboard-input"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="content" className="dashboard-label">
                  Content
                </label>
                <textarea
                  id="content"
                  value={editPost.content}
                  onChange={(e) =>
                    setEditPost({ ...editPost, content: e.target.value })
                  }
                  rows={5}
                  className="dashboard-input"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="image" className="dashboard-label">
                  Image
                </label>
                <div className="rounded-2xl border border-dashed border-slate-200/80 bg-white/70 p-4">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleImageUpload(file);
                      }
                    }}
                    className="dashboard-input file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.2em] file:text-white"
                  />
                  {editPost.image && (
                    <p className="mt-2 text-xs text-slate-500">
                      Current image set.
                    </p>
                  )}
                </div>
              </div>
              <div className="md:col-span-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeUpdateModal}
                  className="rounded-xl border border-slate-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="dashboard-button"
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTable;
