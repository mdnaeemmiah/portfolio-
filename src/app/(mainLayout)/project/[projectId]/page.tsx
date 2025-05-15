import ProjectDetails from "@/components/project/ProjectDetails";

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params;
  
  // Fetching the project details by ID
  const res = await fetch(`https://l2b4-a5-server.vercel.app/api/project/${projectId}`);
  const project = await res.json();
  console.log(project.data);
  
  return (
    <div className="pt-10">
      {/* Pass the fetched project data to the ProjectDetails component */}
      <ProjectDetails project={project.data} />
    </div>
  );
};

export default ProjectDetailsPage;
