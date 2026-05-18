"use client";

import BlogSection from "@/src/componenets/blogSection/blogSection";
import Footer from "@/src/componenets/shared/footer";
import Navbar from "@/src/componenets/shared/navbar";

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BlogSection></BlogSection>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
