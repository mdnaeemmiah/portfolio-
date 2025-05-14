'use client';

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useCreateProjectMutation } from '@/redux/features/project/projectApi';

interface ProjectPostFormData {
  title: string;
  description: string;
  liveLink: string;
  image: File | null;
}

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/db9egbkam/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'naeemmiah';

const ProjectPostForm = () => {
  const [formData, setFormData] = useState<ProjectPostFormData>({
    title: '',
    description: '',
    liveLink: '',
    image: null,
  });

  const [imageUrl, setImageUrl] = useState<string>('');
  const [createProject, { isLoading }] = useCreateProjectMutation();

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
      uploadImage(file);
    }
  };

  const uploadImage = async (file: File) => {
    const imageFormData = new FormData();
    imageFormData.append('file', file);
    imageFormData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, imageFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setImageUrl(response.data.secure_url);
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error uploading image');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      toast.error('Please upload an image');
      return;
    }

    const projectPost = {
      title: formData.title,
      description: formData.description,
      liveLink: formData.liveLink, // ✅ Fixed liveLink
      image: imageUrl,
    };

    try {
      const response = await createProject(projectPost).unwrap();
      console.log('✅ Success:', response);
      toast.success('Project post created successfully!');
      setFormData({ title: '', description: '', liveLink: '', image: null });
      setImageUrl('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('❌ Error:', error);
      toast.error(error?.data?.message || 'Error creating project post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-gray-900 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Project Post</h2>

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
          placeholder="Enter title"
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          placeholder="Enter description"
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="liveLink" className="block text-sm font-semibold">
          Project Link
        </label>
        <input
          type="url"
          id="liveLink"
          name="liveLink"
          value={formData.liveLink}
          placeholder="Enter url link"
          onChange={handleChange}
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
        disabled={isLoading}
      >
        {isLoading ? 'Creating...' : 'Create Project Post'}
      </button>
    </form>
  );
};

export default ProjectPostForm;
