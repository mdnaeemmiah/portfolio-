// /* eslint-disable @typescript-eslint/no-explicit-any */

// /* eslint-disable @next/next/no-img-element */
// 'use client';

// import { useState } from 'react';
// import { useGetAllProjectsQuery, useDeleteProjectMutation, useUpdateProjectMutation } from '@/redux/features/project/projectApi';
// import toast from 'react-hot-toast';
// import { FiEdit, FiTrash2 } from 'react-icons/fi';

// const ManageProjectTable = () => {
//   const { data, isLoading, isError, refetch } = useGetAllProjectsQuery(undefined);
//   const [deleteProject] = useDeleteProjectMutation();
//   const [updateProject] = useUpdateProjectMutation();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editProject, setEditProject] = useState<{
//     title: string;
//     description: string;
//     image: string;
//     liveLink: string;
//     id: string;
//   } | null>(null);

//   const projects = Array.isArray(data?.data) ? data?.data : data?.data?.projects || [];

//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 10;
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this project?')) return;

//     try {
//       await deleteProject(id).unwrap();
//       toast.success('Project deleted successfully!');
//       refetch();
//     } catch (error: any) {
//       console.error('Error deleting project:', error);
//       toast.error(error?.data?.message || 'Error deleting project');
//     }
//   };

//   const openUpdateModal = (project: { _id?: string; title: string; description: string; image: string; liveLink: string }) => {
//     setEditProject({
//       title: project.title,
//       description: project.description || '',
//       image: project.image || '',
//       liveLink: project.liveLink || '',
//       id: project._id || '',
//     });
//     setIsModalOpen(true);
//   };

//   const closeUpdateModal = () => {
//     setIsModalOpen(false);
//     setEditProject(null);
//   };

//   const handleUpdateSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!editProject?.id) {
//       toast.error('Project ID is missing!');
//       return;
//     }

//     try {
//       const updatedProjectData = {
//         id: editProject.id,
//         title: editProject.title,
//         description: editProject.description,
//         image: editProject.image,
//         liveLink: editProject.liveLink,
//       };

//       await updateProject(updatedProjectData).unwrap();
//       toast.success('Project updated successfully!');
//       refetch();
//       closeUpdateModal();
//     } catch (error: any) {
//       console.error('Error updating project:', error);
//       toast.error(error?.data?.message || 'Error updating project');
//     }
//   };

//   if (isLoading) return <p>Loading projects...</p>;
//   if (isError) return <p>Error loading projects!</p>;

//   return (
//     <div className="container mx-auto mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4 text-white text-center">Project Management</h2>
//       <table className="w-full border-collapse border border-gray-300 text-white">
//         <thead>
//           <tr className="bg-gray-800">
//             <th className="border p-2">Title</th>
//             <th className="border p-2">Image</th>
//             <th className="border p-2">Live Link</th>
//             <th className="border p-2">Update</th>
//             <th className="border p-2">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProjects.length > 0 ? (
//             currentProjects.map((project:any, index:any) => (
//               <tr key={project._id || index} className="text-center border">
//                 <td className="border p-2">{project.title}</td>
//                 <td className="border p-2">
//                   <img src={project.image} alt={project.title} className="w-16 h-16 object-cover mx-auto" />
//                 </td>
//                 <td className="border p-2">
//                   <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
//                     View Live
//                   </a>
//                 </td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => openUpdateModal(project)}
//                     className="text-blue-500 hover:text-blue-700"
//                     title="Edit"
//                   >
//                     <FiEdit size={20} />
//                   </button>
//                 </td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => project._id && handleDelete(project._id)}
//                     className="text-red-500 hover:text-red-700"
//                     disabled={!project._id}
//                     title="Delete"
//                   >
//                     <FiTrash2 size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={6} className="text-center p-4">
//                 No projects found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination UI */}
  
//         <div className="flex justify-center mt-8">
//           <nav className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow-md">
//             <button
//               onClick={() => goToPage(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`px-3 py-1 rounded-md text-sm font-medium transition 
//                 ${currentPage === 1
//                   ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                   : "bg-[#C51963] text-white hover:bg-[#C51963]/90 hover:scale-105"}`}
//             >
//               Previous
//             </button>

//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//               <button
//                 key={number}
//                 onClick={() => goToPage(number)}
//                 className={`px-3 py-1 rounded-md text-sm font-medium transition 
//                   ${currentPage === number
//                     ? "bg-[#C51963] text-white"
//                     : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
//               >
//                 {number}
//               </button>
//             ))}

//             <button
//               onClick={() => goToPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`px-3 py-1 rounded-md text-sm font-medium transition 
//                 ${currentPage === totalPages
//                   ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                   : "bg-[#C51963] text-white hover:bg-[#C51963]/90 hover:scale-105"}`}
//             >
//               Next
//             </button>
//           </nav>
//         </div>


//       {/* Modal */}
//       {isModalOpen && editProject && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-gray-950 p-6 rounded-lg w-1/3">
//             <h3 className="text-2xl mb-4">Update Project</h3>
//             <form onSubmit={handleUpdateSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
//                 <input
//                   type="text"
//                   id="title"
//                   value={editProject.title}
//                   onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-black"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
//                 <textarea
//                   id="description"
//                   value={editProject.description}
//                   onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-black"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="image" className="block text-sm font-semibold mb-2">Image URL</label>
//                 <input
//                   type="text"
//                   id="image"
//                   value={editProject.image}
//                   onChange={(e) => setEditProject({ ...editProject, image: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-black"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="liveLink" className="block text-sm font-semibold mb-2">Live Link</label>
//                 <input
//                   type="text"
//                   id="liveLink"
//                   value={editProject.liveLink}
//                   onChange={(e) => setEditProject({ ...editProject, liveLink: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-black"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button type="button" onClick={closeUpdateModal} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
//                 <button type="submit" className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg transition-all duration-300 hover:scale-105 px-4 py-2 rounded">Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageProjectTable;







/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import {
  useGetAllProjectsQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from '@/redux/features/project/projectApi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { toast as sonnerToast } from 'sonner';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/db9egbkam/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'naeemmiah';

const ManageProjectTable = () => {
  const { data, isLoading, isError, refetch } = useGetAllProjectsQuery(undefined);
  const [deleteProject] = useDeleteProjectMutation();
  const [updateProject] = useUpdateProjectMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProject, setEditProject] = useState<{
    title: string;
    description: string;
    image: string;
    liveLink: string;
    order: number;
    frontendSource?: string;
    backendSource?: string;
    id: string;
  } | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const projects = Array.isArray(data?.data) ? data?.data : data?.data?.projects || [];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
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
          background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(249,245,240,0.98))",
          boxShadow: "0 30px 60px -40px rgba(15,23,42,0.55)",
        },
        action: {
          label: 'Delete',
          onClick: () => resolve(true),
        },
        cancel: {
          label: 'Cancel',
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
    const accepted = await confirmDelete('Delete this project?');
    if (!accepted) return;

    try {
      await deleteProject(id).unwrap();
      toast.success('Project deleted successfully!');
      refetch();
    } catch (error: any) {
      console.error('Error deleting project:', error);
      toast.error(error?.data?.message || 'Error deleting project');
    }
  };

  const openUpdateModal = (project: { _id?: string; title: string; description: string; image: string; liveLink: string; frontendSource?: string; backendSource?: string }) => {
    setEditProject({
      title: project.title,
      description: project.description || '',
      image: project.image || '',
      liveLink: project.liveLink || '',
      order: (project as { order?: number }).order ?? 0,
      frontendSource: project.frontendSource || '',
      backendSource: project.backendSource || '',
      id: project._id || '',
    });
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setEditProject(null);
  };

  const handleImageUpload = async (file: File) => {
    const imageFormData = new FormData();
    imageFormData.append('file', file);
    imageFormData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      setIsUploading(true);
      const response = await axios.post(CLOUDINARY_URL, imageFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const uploadedUrl = response.data.secure_url as string;
      setEditProject((prev) => (prev ? { ...prev, image: uploadedUrl } : prev));
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error uploading image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editProject?.id) {
      toast.error('Project ID is missing!');
      return;
    }

    try {
      const updatedProjectData = {
        title: editProject.title,
        description: editProject.description,
        image: editProject.image,
        liveLink: editProject.liveLink,
        order: editProject.order,
        frontendSource: editProject.frontendSource || undefined,
        backendSource: editProject.backendSource || undefined,
      };

      await updateProject({ id: editProject.id, updatedData: updatedProjectData }).unwrap();
      toast.success('Project updated successfully!');
      refetch();
      closeUpdateModal();
    } catch (error: any) {
      console.error('Error updating project:', error);
      toast.error(error?.data?.message || 'Error updating project');
    }
  };

  if (isLoading) return <p>Loading projects...</p>;
  if (isError) return <p>Error loading projects!</p>;

  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <div className="flex flex-col gap-2 border-b border-slate-200/70 pb-4">
          <p className="section-kicker">Projects</p>
          <h2 className="text-2xl font-semibold text-slate-900">Project Management</h2>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th className="dashboard-th">Title</th>
                <th className="dashboard-th">Image</th>
                <th className="dashboard-th">Order</th>
                <th className="dashboard-th">Live Link</th>
                <th className="dashboard-th">Update</th>
                <th className="dashboard-th">Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.length > 0 ? (
                currentProjects.map((project: any, index: any) => (
                  <tr key={project._id || index} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/40">
                    <td className="dashboard-td font-semibold text-slate-900">
                      {project.title}
                    </td>
                    <td className="dashboard-td">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-14 w-14 rounded-xl object-cover"
                      />
                    </td>
                    <td className="dashboard-td font-semibold text-slate-900">
                      {project.order ?? 0}
                    </td>
                    <td className="dashboard-td">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-slate-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                      >
                        View Live
                      </a>
                    </td>
                    <td className="dashboard-td">
                      <button
                        onClick={() => openUpdateModal(project)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                        title="Edit"
                      >
                        <FiEdit size={16} />
                      </button>
                    </td>
                    <td className="dashboard-td">
                      <button
                        onClick={() => project._id && handleDelete(project._id)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rose-200 text-rose-500 transition hover:border-rose-300 hover:text-rose-600"
                        disabled={!project._id}
                        title="Delete"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="dashboard-td text-center text-slate-500">
                    No projects found.
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
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              currentPage === 1
                ? 'cursor-not-allowed bg-slate-100 text-slate-400'
                : 'bg-[#c27a52] text-white hover:bg-[#b86f47]'
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                currentPage === number
                  ? 'bg-[#c27a52] text-white'
                  : 'bg-white text-slate-500 hover:bg-slate-100'
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              currentPage === totalPages
                ? 'cursor-not-allowed bg-slate-100 text-slate-400'
                : 'bg-[#c27a52] text-white hover:bg-[#b86f47]'
            }`}
          >
            Next
          </button>
        </nav>
      </div>

      {isModalOpen && editProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] w-full max-w-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">Update</p>
                <h3 className="text-2xl font-semibold text-slate-900">Update Project</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Refresh the title, summary, and hero image before publishing updates.
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

            <form onSubmit={handleUpdateSubmit} className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="title" className="dashboard-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={editProject.title}
                  onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
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
                  min="0"
                  value={editProject.order}
                  onChange={(e) => setEditProject({ ...editProject, order: Number(e.target.value) })}
                  className="dashboard-input"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="description" className="dashboard-label">
                  Description
                </label>
                <textarea
                  id="description"
                  value={editProject.description}
                  onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
                  rows={4}
                  className="dashboard-input"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="liveLink" className="dashboard-label">
                  Live Link
                </label>
                <input
                  type="text"
                  id="liveLink"
                  value={editProject.liveLink}
                  onChange={(e) => setEditProject({ ...editProject, liveLink: e.target.value })}
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
                  {editProject.image && (
                    <p className="mt-2 text-xs text-slate-500">Current image set.</p>
                  )}
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="frontendSource" className="dashboard-label">
                  Frontend Source
                </label>
                <input
                  type="url"
                  id="frontendSource"
                  value={editProject.frontendSource}
                  onChange={(e) => setEditProject({ ...editProject, frontendSource: e.target.value })}
                  className="dashboard-input"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="backendSource" className="dashboard-label">
                  Backend Source
                </label>
                <input
                  type="url"
                  id="backendSource"
                  value={editProject.backendSource}
                  onChange={(e) => setEditProject({ ...editProject, backendSource: e.target.value })}
                  className="dashboard-input"
                />
              </div>
              <div className="md:col-span-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeUpdateModal}
                  className="rounded-xl border border-slate-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                >
                  Cancel
                </button>
                <button type="submit" className="dashboard-button" disabled={isUploading}>
                  {isUploading ? 'Uploading...' : 'Update'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProjectTable;
