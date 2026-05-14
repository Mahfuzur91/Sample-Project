"use client";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "DaisyUI",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "REST API"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
    },
  ];
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">My Skills</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Technologies and tools I use to build modern web applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
