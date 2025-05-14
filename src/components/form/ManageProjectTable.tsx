/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @next/next/no-img-element */
// 'use client';

// import { useState } from 'react';
// import { useGetAllProjectsQuery, useDeleteProjectMutation, useUpdateProjectMutation } from '@/redux/features/project/projectApi';
// import toast from 'react-hot-toast';

// const ManageProjectTable = () => {
//   // Fetch all projects
//   const { data, isLoading, isError, refetch } = useGetAllProjectsQuery(undefined);
//   const [deleteProject] = useDeleteProjectMutation();
//   const [updateProject] = useUpdateProjectMutation(); // Mutation for updating a project
  
//   // Modal state
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editProject, setEditProject] = useState<{
//     title: string;
//     description: string;
//     image: string;
//     liveLink: string;
//     id: string;
//   } | null>(null);

//   // Ensure projects is always an array
//   const projects = Array.isArray(data?.data) ? data?.data : data?.data?.projects || [];

//   // ✅ Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 13;

//   // ✅ Calculate pagination indexes
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

//   // ✅ Handle pagination controls
//   const totalPages = Math.ceil(projects.length / projectsPerPage);
//   const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

//   const handleDelete = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this project?')) return;

//     try {
//       await deleteProject(id).unwrap();
//       toast.success('Project deleted successfully!');
//       refetch(); // Refetch data to reflect the deletion
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       console.error('Error deleting project:', error);
//       toast.error(error?.data?.message || 'Error deleting project');
//     }
//   };

//   const openUpdateModal = (project: { _id?: string; title: string; description: string; image: string; liveLink: string }) => {
//     // Set default values if necessary fields are missing
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

//     // Ensure id is present before making the API call
//     if (!editProject?.id) {
//       toast.error('Project ID is missing!');
//       return;
//     }

//     try {
//       // Trigger the mutation to update the project
//       const updatedProjectData = {
//         id: editProject.id,
//         title: editProject.title,
//         description: editProject.description,
//         image: editProject.image,
//         liveLink: editProject.liveLink,
//       };

//       // Sending the updated data to the backend
//       await updateProject(updatedProjectData).unwrap(); // .unwrap() makes sure errors are caught

//       toast.success('Project updated successfully!');
//       refetch(); // Refetch the projects to get the updated data
//       closeUpdateModal(); // Close the modal after successful update
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       console.error('Error updating project:', error);
//       toast.error(error?.data?.message || 'Error updating project');
//     }
//   };

//   if (isLoading) return <p>Loading projects...</p>;
//   if (isError) return <p>Error loading projects!</p>;

//   return (
//     <div className="container mx-auto mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Project Management</h2>
//       <table className="w-full border-collapse border border-gray-300">
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
//             currentProjects.map((project: { _id?: string; title: string; description: string; image: string; liveLink: string }, index: number) => (
//               <tr key={project._id || index} className="text-center border">
//                 <td className="border p-2">{project.title}</td>
//                 <td className="border p-2">
//                   <img src={project.image} alt={project.title} className="w-16 h-16 object-cover" />
//                 </td>
//                 <td className="border p-2">
//                   <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
//                     View Live
//                   </a>
//                 </td>
//                 <td className="border p-2">
//                   <button onClick={() => openUpdateModal(project)} className="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
//                 </td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => project._id && handleDelete(project._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded"
//                     disabled={!project._id}
//                   >
//                     Delete
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

//       {/* ✅ Pagination Controls */}
//       {projects.length > projectsPerPage && (
//         <div className="flex justify-center mt-4 space-x-4">
//           <button
//             onClick={handlePrevPage}
//             className="bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//           <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>
//           <button
//             onClick={handleNextPage}
//             className="bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* Modal for updating the project */}
//       {isModalOpen && editProject && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-1/3">
//             <h3 className="text-2xl mb-4">Update Project</h3>
//             <form onSubmit={handleUpdateSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
//                 <input
//                   type="text"
//                   id="title"
//                   value={editProject.title}
//                   onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
//                 <textarea
//                   id="description"
//                   value={editProject.description}
//                   onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
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
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
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
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button type="button" onClick={closeUpdateModal} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageProjectTable;



/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { useGetAllProjectsQuery, useDeleteProjectMutation, useUpdateProjectMutation } from '@/redux/features/project/projectApi';
import toast from 'react-hot-toast';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

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
    id: string;
  } | null>(null);

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

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await deleteProject(id).unwrap();
      toast.success('Project deleted successfully!');
      refetch();
    } catch (error: any) {
      console.error('Error deleting project:', error);
      toast.error(error?.data?.message || 'Error deleting project');
    }
  };

  const openUpdateModal = (project: { _id?: string; title: string; description: string; image: string; liveLink: string }) => {
    setEditProject({
      title: project.title,
      description: project.description || '',
      image: project.image || '',
      liveLink: project.liveLink || '',
      id: project._id || '',
    });
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setEditProject(null);
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editProject?.id) {
      toast.error('Project ID is missing!');
      return;
    }

    try {
      const updatedProjectData = {
        id: editProject.id,
        title: editProject.title,
        description: editProject.description,
        image: editProject.image,
        liveLink: editProject.liveLink,
      };

      await updateProject(updatedProjectData).unwrap();
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
    <div className="container mx-auto mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Project Management</h2>
      <table className="w-full border-collapse border border-gray-300 text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="border p-2">Title</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Live Link</th>
            <th className="border p-2">Update</th>
            <th className="border p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.length > 0 ? (
            currentProjects.map((project:any, index:any) => (
              <tr key={project._id || index} className="text-center border">
                <td className="border p-2">{project.title}</td>
                <td className="border p-2">
                  <img src={project.image} alt={project.title} className="w-16 h-16 object-cover mx-auto" />
                </td>
                <td className="border p-2">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    View Live
                  </a>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => openUpdateModal(project)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <FiEdit size={20} />
                  </button>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => project._id && handleDelete(project._id)}
                    className="text-red-500 hover:text-red-700"
                    disabled={!project._id}
                    title="Delete"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center p-4">
                No projects found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination UI */}
  
        <div className="flex justify-center mt-8">
          <nav className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow-md">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md text-sm font-medium transition 
                ${currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#C51963] text-white hover:bg-[#C51963]/90 hover:scale-105"}`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => goToPage(number)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition 
                  ${currentPage === number
                    ? "bg-[#C51963] text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md text-sm font-medium transition 
                ${currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#C51963] text-white hover:bg-[#C51963]/90 hover:scale-105"}`}
            >
              Next
            </button>
          </nav>
        </div>


      {/* Modal */}
      {isModalOpen && editProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-2xl mb-4">Update Project</h3>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
                <input
                  type="text"
                  id="title"
                  value={editProject.title}
                  onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  id="description"
                  value={editProject.description}
                  onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-semibold mb-2">Image URL</label>
                <input
                  type="text"
                  id="image"
                  value={editProject.image}
                  onChange={(e) => setEditProject({ ...editProject, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="liveLink" className="block text-sm font-semibold mb-2">Live Link</label>
                <input
                  type="text"
                  id="liveLink"
                  value={editProject.liveLink}
                  onChange={(e) => setEditProject({ ...editProject, liveLink: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" onClick={closeUpdateModal} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProjectTable;
