import ProjectPostForm from "@/components/form/ProjectPostForm";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div className="dashboard-card text-left">
        <p className="section-kicker">Dashboard</p>
        <h1 className="section-title mt-2">Project Upload</h1>
        <p className="mt-3 text-base text-slate-600">
          Add new projects with title, description, image, and live link.
        </p>
      </div>
      <ProjectPostForm />
    </div>
  );
};

export default DashboardPage;
