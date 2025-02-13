import ProjectDetails from "@/components/project/ProjectDetails";

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params;
  
  // Fetching the project details by ID
  const res = await fetch(`http://localhost:5000/api/project/${projectId}`);
  const project = await res.json();
  console.log(project.data);
  
  return (
    <div>
      {/* Pass the fetched project data to the ProjectDetails component */}
      <ProjectDetails project={project.data} />
    </div>
  );
};

export default ProjectDetailsPage;
