"use client";

const MyPhotography = () => {
  return (
    <div>
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-rose-500 uppercase tracking-[0.4em] text-sm font-semibold">
              Photography Portfolio
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-5 leading-tight">
              Capturing Light, Emotion <br /> & Timeless Stories
            </h1>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8 text-lg">
              Exploring urban landscapes, architecture, portraits and meaningful
              moments through creative photography and visual storytelling.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group overflow-hidden rounded-3xl relative shadow-2xl">
              <img
                src="https://i.ibb.co/Y76C9Ztz/mahfuz.jpg"
                alt="Nature"
                className="h-[450px] w-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-6">
                <h2 className="text-3xl font-bold">My own photo</h2>
                <p className="text-gray-300 mt-2">
                  A random image can sometimes become a timeless memory
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group overflow-hidden rounded-3xl relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                alt="Urban"
                className="h-[450px] w-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-6">
                <h2 className="text-3xl font-bold">Urban</h2>
                <p className="text-gray-300 mt-2">
                  Modern city life and architectural stories.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group overflow-hidden rounded-3xl relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
                alt="Architecture"
                className="h-[450px] w-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-6">
                <h2 className="text-3xl font-bold">Architecture</h2>
                <p className="text-gray-300 mt-2">
                  Elegant structures and timeless designs.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-16">
            <button className="bg-rose-600 hover:bg-rose-700 px-10 py-4 rounded-full text-lg font-semibold duration-300 shadow-xl">
              Explore Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPhotography;
