'use client';

import { useState } from 'react';
import { useCreateBlogPostMutation } from '@/redux/features/blog/blogApi';
import axios from 'axios';
import toast from 'react-hot-toast';

interface BlogPostFormData {
  title: string;
  category: string;
  content: string;
  image: File | null;
}

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/db9egbkam/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'naeemmiah';

const BlogPostForm = () => {
  const [formData, setFormData] = useState<BlogPostFormData>({
    title: '',
    category: '',
    content: '',
    image: null,
  });

  const [createBlogPost] = useCreateBlogPostMutation();
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        CLOUDINARY_URL, // Replace with your Cloudinary cloud name
        formData,{
            headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setImageUrl(response.data.secure_url); // Get the URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
        toast.error('Please upload an image');
        return;
      }

    const blogPost = {
      ...formData,
      image: imageUrl, // Use the image URL returned from Cloudinary
    };

    try {
      await createBlogPost(blogPost); // Call the mutation to create the blog post
      alert('Blog post created successfully!');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Error creating blog post.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl  mx-auto p-4  bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Blog Post</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter blog post title"
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-semibold">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
           placeholder="Enter blog category (e.g. Tech, Health)"
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-semibold">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
              placeholder="Write your blog content here..."
          rows={4}
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-semibold">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  shadow-lg transition-all duration-300 hover:scale-105 text-white p-2 rounded"
      >
        Create Blog Post
      </button>
    </form>
  );
};

export default BlogPostForm;
