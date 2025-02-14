import React from 'react';

const ResumePage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, backgroundColor: '#f4f4f4', color: '#333' }}>
        <header style={{ backgroundColor: '#0070f3', color: 'white', padding: '20px', textAlign: 'center' }}>
          <h1>Naeem</h1>
          <h2>Software Engineer</h2>
        </header>
  
        <div style={{ width: '80%', margin: '0 auto', padding: '20px' }}>
          {/* About Section */}
          <section style={{ marginTop: '20px' }}>
            <h2>About Me</h2>
            <p>
              I am a passionate software engineer with a strong background in web development. I specialize in modern technologies such as React.js, Next.js, TypeScript, Node.js, and more. I am driven by the desire to create efficient, scalable, and user-friendly applications. With experience working in fast-paced environments, I am always ready to take on new challenges and improve my skills.
            </p>
          </section>
  
          {/* Education Section */}
          <section style={{ marginTop: '20px' }}>
            <h2>Education</h2>
            <h3>Bachelor of Science in Software Engineering</h3>
            <p><strong>Daffodil international university</strong> — 2023</p>
            <p>Relevant coursework: Full-Stack Development, Algorithms & Data Structures, Web Development, Database Management Systems.</p>
          </section>
  
          {/* Skills Section */}
          <section style={{ marginTop: '20px' }}>
            <h2>Skills</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS</li>
              <li><strong>Frameworks/Libraries:</strong> React.js, Next.js, Node.js, Express.js, Redux, Tailwind CSS, Ant Design, ShadCN</li>
              <li><strong>Tools:</strong> Git, Webpack, Docker</li>
              <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
              <li><strong>Other:</strong> Responsive Web Design, Agile Development, RESTful APIs, UI/UX Design</li>
            </ul>
          </section>
  
          {/* Certifications Section */}
          <section style={{ marginTop: '20px' }}>
            <h2>Certifications</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li><strong>Web Development (Frontend & Backend)</strong> — Programming Hero <em>Date Obtained: [Month, Year]</em></li>
              <li><strong>JavaScript Algorithms and Data Structures</strong> — Programming Hero <em>Date Obtained: [Month, Year]</em></li>
            </ul>
          </section>
  
          {/* Projects Section */}
          <section style={{ marginTop: '20px' }}>
            <h2>Projects</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li>
                <h3>1. Portfolio Website</h3>
                <p><strong>Technologies:</strong> React.js, Tailwind CSS, Next.js</p>
                <p>Developed a personal portfolio showcasing my skills, projects, and professional background. Implemented a responsive design with smooth animations for an interactive user experience.</p>
              </li>
              <li>
                <h3>2. E-commerce Web Application</h3>
                <p><strong>Technologies:</strong> React.js, Redux, Node.js, MongoDB</p>
                <p>Built a fully functional e-commerce platform with user authentication, product management, and a shopping cart. Integrated payment gateway and ensured security best practices for sensitive information.</p>
              </li>
              <li>
                <h3>3. Blog Platform</h3>
                <p><strong>Technologies:</strong> React.js, Node.js, Express.js, MongoDB</p>
                <p>Created a blog platform where users can post, edit, and delete articles. Implemented user authentication, role-based access, and real-time commenting.</p>
              </li>
              <li>
                <h3>4. Task Management Application</h3>
                <p><strong>Technologies:</strong> React.js, Node.js, PostgreSQL</p>
                <p>Developed a task management application to track tasks and deadlines for teams. Features include task creation, assignment, and progress tracking.</p>
              </li>
            </ul>
          </section>
  
          {/* Experience Section */}
          <section style={{ marginTop: '20px' }}>
            <h2>Experience</h2>
            <h3>Software Engineer Intern</h3>
            <p><strong>[Company Name]</strong> — [Month, Year] to [Month, Year]</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li>Collaborated on the development of a web-based application, contributing to the frontend and backend features.</li>
              <li>Worked with a team to build and maintain responsive pages using React.js and Node.js.</li>
              <li>Participated in code reviews and contributed to debugging and optimizing code.</li>
            </ul>
          </section>
  
          {/* Contact Section */}
          <section style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2>Contact Me</h2>
            <p>Email: <a href="mailto:your-email@example.com" style={{ color: '#0070f3' }}>mdnaeem@example.com</a></p>
            <p>Phone: <a href="tel:your-phone-number" style={{ color: '#0070f3' }}>01892907131</a></p>
            <p>Portfolio: <a href="your-portfolio-link" target="_blank" style={{ color: '#0070f3' }}>your-portfolio-link</a></p>
            <p>LinkedIn: <a href="your-linkedin-profile" target="_blank" style={{ color: '#0070f3' }}> md-naeem-islam-59a2a8292</a></p>
          </section>
        </div>
      </div>
    );
};

export default ResumePage;