"use client";

const ServiceSection = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and modern websites using React, Next.js, Tailwind CSS, and DaisyUI.",
    },
    {
      title: "Backend Development",
      description:
        "Creating backend APIs and databases using Node.js, Express.js, and MongoDB.",
    },
    {
      title: "UI / UX Design",
      description:
        "Designing clean, user-friendly, and modern interfaces for websites and web apps.",
    },
    {
      title: "Photography",
      description:
        "Creative urban and portrait photography with professional editing and composition.",
    },
  ];
  return (
    <div>
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">My Services</h2>

            <p className="text-gray-600 mt-4">
              Here are the services and skills I currently offer.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">{service.description}</p>

                <button className="mt-6 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
