'use client';

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useCreateProjectMutation } from '@/redux/features/project/projectApi';

interface ProjectPostFormData {
  title: string;
  description: string;
  liveLink: string;
  order: string;
  frontendSource: string;
  backendSource: string;
  image: File | null;
}

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/db9egbkam/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'naeemmiah';

const ProjectPostForm = () => {
  const [formData, setFormData] = useState<ProjectPostFormData>({
    title: '',
    description: '',
    liveLink: '',
    order: '0',
    frontendSource: '',
    backendSource: '',
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
      order: Number(formData.order) || 0,
      frontendSource: formData.frontendSource || undefined,
      backendSource: formData.backendSource || undefined,
    };

    try {
      const response = await createProject(projectPost).unwrap();
      console.log('✅ Success:', response);
      toast.success('Project post created successfully!');
      setFormData({
        title: '',
        description: '',
        liveLink: '',
        order: '0',
        frontendSource: '',
        backendSource: '',
        image: null,
      });
      setImageUrl('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('❌ Error:', error);
      toast.error(error?.data?.message || 'Error creating project post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card mx-auto max-w-3xl p-8">
      <div className="flex flex-col gap-2 text-left">
        <p className="section-kicker">New Project</p>
        <h2 className="text-3xl font-semibold text-slate-900">Create Project Post</h2>
        <p className="text-sm text-slate-600">
          Upload a hero image and add a clean summary with the live URL.
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
            placeholder="Project title"
            className="dashboard-input"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="liveLink" className="dashboard-label">
            Project Link
          </label>
          <input
            type="url"
            id="liveLink"
            name="liveLink"
            value={formData.liveLink}
            placeholder="https://yourproject.com"
            onChange={handleChange}
            className="dashboard-input"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="order" className="dashboard-label">
            Display Order
          </label>
          <input
            type="number"
            id="order"
            name="order"
            min="0"
            value={formData.order}
            placeholder="0"
            onChange={handleChange}
            className="dashboard-input"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="frontendSource" className="dashboard-label">
            Frontend Source
          </label>
          <input
            type="url"
            id="frontendSource"
            name="frontendSource"
            value={formData.frontendSource}
            placeholder="https://github.com/yourname/frontend"
            onChange={handleChange}
            className="dashboard-input"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="backendSource" className="dashboard-label">
            Backend Source
          </label>
          <input
            type="url"
            id="backendSource"
            name="backendSource"
            value={formData.backendSource}
            placeholder="https://github.com/yourname/backend"
            onChange={handleChange}
            className="dashboard-input"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="description" className="dashboard-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            placeholder="Describe the project in one or two sentences"
            onChange={handleChange}
            rows={4}
            className="dashboard-input"
            required
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="image" className="dashboard-label">
            Project Image
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
        <button type="submit" className="dashboard-button" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Project'}
        </button>
      </div>
    </form>
  );
};

export default ProjectPostForm;
