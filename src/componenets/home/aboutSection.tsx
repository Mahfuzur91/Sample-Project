"use client";

const AboutSection = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute w-[90%] h-[90%] bg-gradient-to-tr from-gray-300 via-gray-200 to-gray-400 rounded-[40px] blur-3xl opacity-40"></div>

            {/* Decorative Frame */}
            <div className="relative p-2 rounded-[35px] bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 shadow-2xl">
              <img
                src="https://i.ibb.co/nqgqJ72p/bb-photo.jpg"
                alt="Mahfuzur Rahman"
                className="w-full max-w-md h-[500px] object-cover rounded-[30px]"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-5 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-200">
                <p className="text-sm font-semibold text-gray-900">
                  Full-Stack Developer
                </p>

                <p className="text-xs text-gray-500">
                  React • Next.js • Tailwind
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold mb-3">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Building modern web experiences with creativity and purpose.
            </h2>

            <p className="text-gray-600 leading-8 mb-5 text-lg">
              Hello! I am a passionate Frontend Developer currently expanding
              into Full-Stack Development. I enjoy building clean, responsive,
              and user-friendly web applications using React, Next.js, and
              modern web technologies.
            </p>

            <p className="text-gray-600 leading-8 mb-8 text-lg">
              I work with HTML, CSS, JavaScript, Tailwind CSS, DaisyUI,
              React.js, and Next.js. Alongside development, I also enjoy
              photography, creative design, and transforming real-world ideas
              into meaningful digital products.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "Next.js", "Tailwind CSS", "DaisyUI", "UI Design"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-gray-700 text-sm font-medium hover:shadow-md transition"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            {/* Button */}
            <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium shadow-lg hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
