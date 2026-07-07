"use client";


import Image from "next/image";

import pic1 from "@/assets/images/pic1.png";
import pic2 from "@/assets/images/pic2.jpg";
import pic3 from "@/assets/images/pic5.jpg";
import pic4 from "@/assets/images/pic6.png";
import pic5 from "@/assets/images/pic7.jpg";
import pic6 from "@/assets/images/pic4.png";
import pic7 from "@/assets/images/pic9.png";
import pic8 from "@/assets/images/pic8.png";
import pic16 from "@/assets/images/pic17.jpg";
import pic9 from "@/assets/images/pic10.jpg";
import pic10 from "@/assets/images/pic11.jpg";
import pic11 from "@/assets/images/pic12.png";
import pic12 from "@/assets/images/pic13.jpg";
import pic13 from "@/assets/images/pic14.png";
import pic14 from "@/assets/images/pic15.jpg";
import pic15 from "@/assets/images/pic16.jpg";
import pic17 from "@/assets/images/pic19 copy.png";
// import pic18 from "@/assets/images/pic19.png";
import pic19 from "@/assets/images/pic21.jpg";
// import pic20 from "@/assets/images/pic21.jpg";
import pic21 from "@/assets/java.png";
import pic22 from "@/assets/py.jpg";
import pic23 from "@/assets/post.png";
import pic24 from "@/assets/images/pic5.png";
// import pic25 from "@/assets/images/pic6 copy.png";
import pic26 from "@/assets/tailw.png";
import pic27 from "@/assets/git.png";
import pic28 from "@/assets/images (1).jpg";
import pic29 from "@/assets/ci.jpg";
import pic30 from "@/assets/dev.jpg";
import pic31 from "@/assets/js.jpg";
// import pic20 from "@/assets/images/pic22.jpg"; // Prisma
// import pic21 from "@/assets/images/pic23.jpg"; // Tailwind
// import pic22 from "@/assets/images/pic24.jpg"; // Stripe



const skills = [
  { id: 1, name: "HTML", title: "Building Blocks of Web", description: "The foundation of web structure and content.", image: pic1 },
  { id: 2, name: "CSS", title: "Styling the Web", description: "Enhance user experience with beautiful designs.", image: pic2 },
  { id: 31, name: "JAVASCRIPT", title: "Dynamic Web", description: "Power interactive and modern web experiences.", image: pic31 },
  { id: 3, name: "REDUX", title: "State Management", description: "Manage application state efficiently.", image: pic3 },
  { id: 4, name: "C", title: "Powerful Programming", description: "A versatile and efficient programming language.", image: pic4 },
  { id: 5, name: "EXPRESS", title: "Backend Framework", description: "Minimalist web framework for Node.js.", image: pic5 },
  { id: 6, name: "TYPESCRIPT", title: "Typed JavaScript", description: "Enhance JS with static typing and better tooling.", image: pic6 },
  { id: 7, name: "NODE.Js", title: "JavaScript Runtime", description: "Run JavaScript on the server-side.", image: pic7 },
  { id: 8, name: "REACT", title: "Component-Based UI", description: "Build dynamic user interfaces efficiently.", image: pic8 },
  { id: 9, name: "NEXT.Js", title: "Server-Side Rendering", description: "Optimized React framework for production.", image: pic9 },
  { id: 10, name: "NEXT AUTH", title: "Authentication Simplified", description: "Secure and easy authentication for Next.js.", image: pic10 },
  { id: 11, name: "FIREBASE", title: "Backend as a Service", description: "Realtime database and authentication solution.", image: pic11 },
  { id: 12, name: "CORS", title: "Cross-Origin Requests", description: "Secure communication between different origins.", image: pic12 },
  { id: 13, name: ".ENV", title: "Environment Variables", description: "Manage sensitive configuration data.", image: pic13 },
  { id: 14, name: "NETLIFY", title: "Deploy with Ease", description: "Hosting platform for modern web applications.", image: pic14 },
  { id: 15, name: "VERCEL", title: "Frontend Deployment", description: "Optimized hosting for Next.js applications.", image: pic15 },
  { id: 16, name: "VISUAL CODE", title: "Code Editor", description: "A powerful editor for coding efficiently.", image: pic16 },
  { id: 17, name: "CLOUDINARY", title: "Image Management", description: "Store, optimize, and deliver media assets.", image: pic17 },
  // { id: 18, name: "PAYMENT", title: "Online Transactions", description: "Secure and seamless online payment solutions.", image: pic18 },
  { id: 19, name: "SHURJOPAY", title: "Payment Gateway", description: "A reliable payment gateway for transactions.", image: pic19 },
  // { id: 20, name: "EXPRESS", title: "Fast Backend Framework", description: "A powerful web framework for Node.js.", image: pic20 },
  { id: 21, name: "JAVA", title: "Enterprise Ready", description: "Build robust, scalable backend systems.", image: pic21 },
  { id: 22, name: "PYTHON", title: "Versatile Development", description: "Fast prototyping and automation for modern apps.", image: pic22 },
  { id: 23, name: "POSTGRESQL", title: "Relational Data", description: "Reliable SQL database for production workloads.", image: pic23 },
  { id: 24, name: "MONGODB", title: "Document Database", description: "Flexible data storage for modern apps.", image: pic24 },
  // { id: 25, name: "PRISMA", title: "ORM Toolkit", description: "Type-safe database access and migrations.", image: pic25 },
  { id: 26, name: "TAILWIND", title: "Utility-First CSS", description: "Build fast, consistent UI with utilities.", image: pic26 },
  { id: 27, name: "GIT", title: "Version Control", description: "Track changes and collaborate with teams.", image: pic27 },
  { id: 28, name: "DOCKER", title: "Containerization", description: "Ship consistent environments everywhere.", image: pic28 },
  { id: 29, name: "CI/CD", title: "Automated Delivery", description: "Build, test, and deploy with confidence.", image: pic29 },
  { id: 30, name: "DEVOPS", title: "Reliable Delivery", description: "Automate, monitor, and scale systems.", image: pic30 },
];

const Skils = () => {
  return (
    <section className="section text-center">
      <p className="section-kicker">Core Toolkit</p>
      <h2 className="section-title mt-3">A focused stack that ships fast.</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
        I combine modern front-end craft with reliable backend foundations to
        deliver polished, scalable products.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="glass-card group relative overflow-hidden p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_70px_-40px_rgba(12,15,22,0.6)]"
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-slate-800/60 dark:via-slate-900/10" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.35)] dark:bg-slate-900/70">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold tracking-wide text-slate-900">{skill.name}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-slate-500">{skill.title}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skils;
