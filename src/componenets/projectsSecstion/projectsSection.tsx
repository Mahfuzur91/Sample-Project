"use client";

const projects = [
  {
    title: "Calculator App",
    category: "React Project",
    description:
      "A clean calculator application built with React, Tailwind CSS and reusable component logic.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Weather App",
    category: "API Project",
    description:
      "A responsive weather application using live API data, loading states and dynamic UI updates.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Todo List",
    category: "Frontend App",
    description:
      "A modern task management app with add, delete and interactive state-based functionality.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-base-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-base-content">
            My Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base-content/60 leading-7">
            A selection of projects I have built while improving my frontend and
            full-stack development skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group card bg-base-200 shadow-lg rounded-3xl overflow-hidden border border-base-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <figure className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                <span className="absolute top-4 left-4 badge badge-primary border-none px-4 py-3">
                  {project.category}
                </span>
              </figure>

              <div className="card-body p-7">
                <h3 className="text-2xl font-bold text-base-content">
                  {project.title}
                </h3>

                <p className="text-base-content/60 leading-7">
                  {project.description}
                </p>

                <div className="card-actions mt-4">
                  <button className="btn btn-primary rounded-full px-7">
                    View Project
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
