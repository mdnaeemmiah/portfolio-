"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/utils/TabButton";
import img1 from "@/assets/images/WhatsApp Image 2024-03-27 at 14.53.53_5b68d4e3.jpg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex gap-24 flex-wrap">
        <div>
          <h1 className="font-bold underline mb-2">Technical Skills:</h1>
          <ul className="list-disc pl-4">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React.js & Next.js</li>
            <li>Node.js & Express.js</li>
            <li>MongoDB & Mongoose</li>
            <li>Tailwind CSS</li>
            <li>HTML5 & CSS3</li>
            <li>REST API Development</li>
            <li>JWT & Role-based Authentication</li>
            <li>Stripe Payment Integration</li>
            <li>Formik & Yup Validation</li>
            <li>Redux Toolkit</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold underline mb-2">Soft Skills:</h1>
          <ul className="list-disc pl-4">
            <li>Strong Communication</li>
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
            <li>Continuous Learner</li>
            <li>Adaptability</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Achievement",
    id: "achievement",
    content: <h1 className="text-center">N/A</h1>,
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <strong>Full-Stack Web Developer (2024 - Present)</strong> <br />
          Built and maintained multiple full-stack applications using:
          <ul className="list-disc pl-6">
            <li>Frontend: React.js, Next.js, Tailwind CSS, TypeScript</li>
            <li>Backend: Node.js, Express.js, MongoDB, Prisma</li>
            <li>Authentication: JWT, Role-Based Access Control</li>
            <li>Payments: Stripe Integration</li>
            <li>Form Handling: Formik & Yup</li>
          </ul>
        </li>
        <li>
          <strong>Freelance Projects & Personal Portfolio (2024 - 25)</strong>{" "}
          <br />
          Developed and deployed several responsive web applications and a
          personal portfolio site. Focused on clean UI/UX and dynamic API
          integration.
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>
          <strong>Daffodil International University</strong> (Present) <br />
          BSc in Software Engineering
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>
          <strong>Complete Web Development Course</strong> <br />
          Programming Hero (Instructor: Jhankar Mahbub)
        </li>
        <li>
          <strong>Backend Development with Node.js</strong> <br />
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="section">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Text Section */}
        <div className="order-2 space-y-6 lg:order-1">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title mt-3">Design-minded developer, product focused.</h2>
          </div>
          <p className="text-base leading-relaxed text-slate-600">
            I&apos;m a junior web developer with a full-stack mindset. I build modern
            applications with React, Next.js, Node.js, and MongoDB, focusing on
            clean UI, steady performance, and a smooth user experience.
          </p>

          <div className="flex flex-wrap gap-3">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievement")}
              active={tab === "achievement"}
            >
              Achievements
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="glass-card p-6 text-sm text-slate-600">
            {selectedTab ? selectedTab.content : "No content found"}
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 flex items-center justify-center lg:order-2">
          <div className="soft-ring rounded-[32px] bg-white/70 p-4">
            <Image
              className="rounded-[28px] object-cover"
              src={img1}
              width={420}
              height={520}
              alt="About"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
