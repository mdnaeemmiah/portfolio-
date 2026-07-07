"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";
import { useGetAllBlogPostsQuery } from "@/redux/features/blog/blogApi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const { data: projectData } = useGetAllProjectsQuery(undefined);
  const { data: blogData } = useGetAllBlogPostsQuery(undefined);

  const projects = Array.isArray(projectData?.data) ? projectData.data : [];
  const blogs = Array.isArray(blogData?.data) ? blogData.data : [];

  const totalProjects = projects.length;
  const totalBlogs = blogs.length;
  const monthlyPosts = blogs.filter((post: { createdAt?: string }) => {
    if (!post?.createdAt) return false;
    const created = new Date(post.createdAt);
    const now = new Date();
    return created.getFullYear() === now.getFullYear() && created.getMonth() === now.getMonth();
  }).length;

  const data = {
    labels: [
      "HTML", "CSS", "JavaScript", "Node.js", "React.js",
      "Next.js", "Express.js", "CORS", "MongoDB", "TypeScript", "Redux"
    ],
    datasets: [
      {
        label: "Skill Focus",
        data: [10, 9, 10, 8, 9, 9, 8, 7, 8, 9, 8],
        fill: true,
        borderColor: "#c27a52",
        backgroundColor: "rgba(194, 122, 82, 0.15)",
        pointBackgroundColor: "#c27a52",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 4,
        tension: 0.35
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#475569",
          font: {
            size: 12
          }
        }
      },
      title: {
        display: false
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        titleColor: "#f8fafc",
        bodyColor: "#e2e8f0",
        borderColor: "rgba(226, 232, 240, 0.2)",
        borderWidth: 1,
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (context: { raw: any }) => `Importance: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#475569"
        },
        grid: {
          color: "rgba(148, 163, 184, 0.2)"
        }
      },
      y: {
        ticks: {
          color: "#475569"
        },
        grid: {
          color: "rgba(148, 163, 184, 0.2)"
        }
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass-card p-5 text-left">
          <p className="section-kicker">Projects</p>
          <h3 className="mt-2 text-3xl font-semibold text-slate-900">{totalProjects}</h3>
          <p className="mt-2 text-sm text-slate-600">Total projects published</p>
        </div>
        <div className="glass-card p-5 text-left">
          <p className="section-kicker">Blogs</p>
          <h3 className="mt-2 text-3xl font-semibold text-slate-900">{totalBlogs}</h3>
          <p className="mt-2 text-sm text-slate-600">Total blog posts published</p>
        </div>
        <div className="glass-card p-5 text-left">
          <p className="section-kicker">This Month</p>
          <h3 className="mt-2 text-3xl font-semibold text-slate-900">{monthlyPosts}</h3>
          <p className="mt-2 text-sm text-slate-600">Posts published this month</p>
        </div>
      </div>

      <div className="glass-card p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <p className="section-kicker">Overview</p>
        <h2 className="text-2xl font-semibold text-slate-900">Skill Focus Snapshot</h2>
        <p className="text-sm text-slate-600">
          A quick view of the tools I rely on most for shipping projects.
        </p>
      </div>
      <div className="mt-6 h-[320px]">
        <Line data={data} options={options} />
      </div>
      </div>
    </div>
  );
}

export default App;
