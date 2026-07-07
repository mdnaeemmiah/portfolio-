"use client";

import { useState } from "react";
import { useCreateBlogPostMutation } from "@/redux/features/blog/blogApi";
import axios from "axios";
import toast from "react-hot-toast";

interface BlogPostFormData {
  title: string;
  category: string;
  content: string;
  image: File | null;
}

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/db9egbkam/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "naeemmiah";

const BlogPostForm = () => {
  const [formData, setFormData] = useState<BlogPostFormData>({
    title: "",
    category: "",
    content: "",
    image: null,
  });

  const [createBlogPost] = useCreateBlogPostMutation();
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      uploadImage(file); // Handle the image upload to Cloudinary
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        CLOUDINARY_URL, // Replace with your Cloudinary cloud name
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setImageUrl(response.data.secure_url); // Get the URL of the uploaded image
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      toast.error("Please upload an image");
      return;
    }

    const blogPost = {
      ...formData,
      image: imageUrl, // Use the image URL returned from Cloudinary
    };

    try {
      await createBlogPost(blogPost).unwrap();
      toast.success("Blog post created successfully!");
      setFormData({ title: "", category: "", content: "", image: null });
      setImageUrl("");
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast.error("Error creating blog post.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card mx-auto max-w-3xl p-8">
      <div className="flex flex-col gap-2 text-left">
        <p className="section-kicker">New Blog</p>
        <h2 className="text-3xl font-semibold text-slate-900">Create Blog Post</h2>
        <p className="text-sm text-slate-600">
          Publish a new article with a clear title, category, and hero image.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="title" className="dashboard-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
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
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Tech, Design, Product"
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
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your content here..."
            rows={5}
            className="dashboard-input"
            required
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="image" className="dashboard-label">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="dashboard-input file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.2em] file:text-white"
            required
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button type="submit" className="dashboard-button">
          Create Blog Post
        </button>
      </div>
    </form>
  );
};

export default BlogPostForm;
