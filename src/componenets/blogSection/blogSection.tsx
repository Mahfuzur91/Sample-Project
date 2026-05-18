"use client";

const BlogSection = () => {
  const blogs = [
    {
      title: "How I Started My Frontend Journey",
      category: "Frontend",
      date: "18 May 2026",
      desc: "My journey learning HTML, CSS, JavaScript, React, Next.js and building real-world projects.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Why Tailwind CSS Makes Design Faster",
      category: "UI Design",
      date: "12 May 2026",
      desc: "A simple explanation of how Tailwind helps developers create clean and responsive websites quickly.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      title: "Building My First Full-Stack Project",
      category: "Full Stack",
      date: "5 May 2026",
      desc: "How I am planning to convert my Google Sheets system into a real web application.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
  ];
  return (
    <div>
      <section className="bg-base-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-rose-700 font-semibold uppercase tracking-[0.25em]">
              My Blog
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-base-content">
              Latest Articles & Thoughts
            </h2>

            <p className="text-base-content/60 max-w-2xl mx-auto mt-5 leading-7">
              I write about frontend development, UI design, full-stack
              learning, and my journey of becoming a professional developer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-xl rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                <figure>
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="h-56 w-full object-cover"
                  />
                </figure>

                <div className="card-body p-7">
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="badge bg-rose-700 text-white border-none px-4 py-3">
                      {blog.category}
                    </span>
                    <span className="text-base-content/50">{blog.date}</span>
                  </div>

                  <h3 className="card-title text-2xl font-bold leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-base-content/60 leading-7 mt-2">
                    {blog.desc}
                  </p>

                  <div className="card-actions mt-5">
                    <button className="btn bg-rose-700 hover:bg-rose-800 text-white border-none rounded-full px-7">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
