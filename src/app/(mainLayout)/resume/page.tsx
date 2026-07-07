import React from 'react';

const ResumePage = () => {
  return (
    <section className="section">
      <div className="glass-card mx-auto max-w-4xl p-8 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <p className="section-kicker">Resume</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Naeem</h1>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            Software Engineer
          </p>
        </div>

        <div className="mt-10 space-y-10 text-sm text-slate-600">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">About Me</h2>
            <p>
              I am a software engineer focused on modern web development. I build
              clean, scalable applications with React, Next.js, TypeScript, and Node.js.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Education</h2>
            <p className="font-semibold text-slate-800">
              Bachelor of Science in Software Engineering
            </p>
            <p>Daffodil International University — 2023</p>
            <p>
              Relevant coursework: Full-Stack Development, Algorithms & Data
              Structures, Database Management Systems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Skills</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS</li>
              <li><strong>Frameworks:</strong> React, Next.js, Node.js, Express</li>
              <li><strong>Tools:</strong> Git, Docker, Webpack</li>
              <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
              <li><strong>UI:</strong> Tailwind CSS, ShadCN, Ant Design</li>
              <li><strong>Other:</strong> REST APIs, UX, Agile</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Certifications</h2>
            <ul className="space-y-2">
              <li><strong>Web Development (Frontend & Backend)</strong> — Programming Hero</li>
              <li><strong>JavaScript Algorithms and Data Structures</strong> — Programming Hero</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Projects</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-slate-800">Portfolio Website</p>
                <p>React, Next.js, Tailwind CSS</p>
                <p>Responsive portfolio with smooth animations and project showcases.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-800">E-commerce Web Application</p>
                <p>React, Redux, Node.js, MongoDB</p>
                <p>Full e-commerce platform with secure payments and user auth.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-800">Blog Platform</p>
                <p>React, Node.js, Express.js, MongoDB</p>
                <p>Role-based publishing workflow with user authentication.</p>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Experience</h2>
            <p className="font-semibold text-slate-800">Software Engineer Intern</p>
            <p>[Company Name] — [Month, Year] to [Month, Year]</p>
            <ul className="list-disc pl-5">
              <li>Built responsive UI and backend features for web apps.</li>
              <li>Collaborated in code reviews and performance tuning.</li>
              <li>Shipped features with React and Node.js.</li>
            </ul>
          </section>

          <section className="text-center">
            <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
            <p>Email: mdnaeemmiah48@gmail.com</p>
            <p>Phone: 01892927131</p>
            <p>LinkedIn: md-naeem-islam-59a2a8292</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;