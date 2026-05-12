"use client";

const AboutSection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Profile"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>

            <p className="text-gray-600 leading-7 mb-4">
              Hello! I am a passionate Frontend Developer currently learning
              Full-Stack Development with React and Next.js. I enjoy building
              modern, responsive, and user-friendly web applications.
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              I have experience with HTML, CSS, JavaScript, Tailwind CSS,
              DaisyUI, React.js, and Next.js. I also love photography and
              creative design.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
