"use client";

const projects = [
  {
    title: "Calculator App",
    description: "A simple calculator built with React and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Weather App",
    description: "A weather application using API data and React.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Todo List",
    description: "A modern todo list app with add and delete functionality.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>

          <p className="text-gray-600 mt-4">
            Here are some projects I have built while learning frontend and
            full-stack development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5">{project.description}</p>

                <button className="btn btn-primary">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
