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
    content: <h1 className="text-center">N/A</h1>,
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
    <section className="text-black dark:bg-gray-900 dark:text-white container mx-auto">
      <div className="md:grid min-h-[700px] md:grid-cols-2 gap-8 items-center py-8 px-6 xl:gap-16 sm:py-16 xl:px-24">
        {/* Text Section */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full order-2 md:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left mt-4">
            About Me
          </h2>
          <p className="text-base text-justify">
            Hi, I&apos;m a Junior Web Developer skilled in JavaScript, TypeScript,
            React, Node.js, Express, MongoDB, and Tailwind CSS. I have built
            several full-stack projects and enjoy working on scalable, modern
            web apps. I am always eager to learn new technologies and contribute
            to open-source. I thrive in collaborative environments and aim to
            build seamless user experiences.
          </p>
          <div className="flex flex-row justify-start mt-8 text-md flex-wrap gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
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
          <div className="mt-4 border p-4 rounded-md">
            {selectedTab ? selectedTab.content : "No content found"}
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-full mx-auto p-2 border-2 flex items-center justify-center w-[240px] h-[295px] lg:w-[315px] lg:h-[390px] order-1 md:order-2">
          <Image
            className="rounded-full object-cover"
            src={img1}
            width={315}
            height={390}
            alt="About pic"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;
