const projects = [
  {
    title: "E-Commerce Web App",
    tech: "React, Node, MongoDB, Redux Toolkit, Tailwind",
    desc: "A full-featured online store with user auth and admin dashboard.",
    githublink: "https://github.com/Aman-Dhiman-vishwakarma/SelfShop",
    projectlink: "https://selfshop.onrender.com"
  },
  {
    title: "Social Media Web App",
    tech: "React, Node, MongoDB, Redux Toolkit, Tailwind",
    desc: "A Instagram like Social Media Web App for create post and send & recive message.",
    githublink: "https://github.com/Aman-Dhiman-vishwakarma/Mediagram",
  },
  {
    title: "Blog Web App",
    tech: "React, Node, MongoDB, Redux Toolkit, Tailwind",
    desc: "A BLOG Web App with user auth and admin dashboard.",
    githublink: "https://github.com/Aman-Dhiman-vishwakarma/Blog-App",
  },
  {
    title: "Resume Maker",
    tech: "React, Tailwind",
    desc: "A Resume Maker for make fresher and experinced person.",
    githublink: "https://github.com/Aman-Dhiman-vishwakarma/ResumeMaker",
    projectlink: "https://resumemaker-wbof.onrender.com"
  },
   {
    title: "Job Portal",
    tech: "React, Node, MongoDB, Redux Toolkit, Tailwind",
    desc: "A Job Portal web app wgere you can access the job.",
    githublink: "https://github.com/Aman-Dhiman-vishwakarma/JOB-PORTAL",
  },
   {
    title: "Twiter Clone",
    tech: "React, Node, MongoDB, Redux Toolkit, Tailwind",
    desc: "A Twiter Clone.",
    githublink: "https://github.com/Aman-Dhiman-vishwakarma/Twitter-Clone",
  },
  // Add more projects here
];

const Projects = () => (
  <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <div
          key={i}
          className="p-6 border rounded-2xl shadow-md transition hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.tech}</p>
          <p className="mt-2 text-gray-700">{project.desc}</p>
          <div className="flex-col flex lg:flex-row mt-2 flex-wrap lg:gap-10">
            <a
              className="mb-2 text-blue-800 hover:underline font-semibold"
              href={project.githublink}
              target="_blank"
            >
              CHECK ON GITHUB
            </a>
            {project.projectlink && <a
              className="text-blue-800 hover:underline font-semibold"
              href={project.projectlink}
              target="_blank"
            >
              GO TO THE PROJECT
            </a>}
           
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
