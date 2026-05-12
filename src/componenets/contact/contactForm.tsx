"use client";

const ContactForm = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Me
            </h2>

            <p className="text-gray-600 mb-8 leading-7">
              Have a project in mind or want to work together? Feel free to
              contact me using the details below or send me a message.
            </p>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Phone:</span> 07875099707
              </p>

              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Email:</span>{" "}
                mahfuzur0291@gmail.com
              </p>

              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Location:</span> London, UK
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
