import React from "react";

export default function Banner() {
  return (
    <div className="hero min-h-[80%] bg-black">
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-left">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            I create modern web experiences using React, Next.js, Tailwind CSS,
            and backend technologies — transforming ideas into functional
            digital products.
          </p>
          <button className="px-6 py-3 rounded-2xl bg-rose-800 hover:bg-rose-700 text-white font-medium shadow-xl transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
