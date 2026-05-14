"use client";

import AboutSection from "../componenets/home/aboutSection";
import Banner from "../componenets/home/banner";
import Skills from "../componenets/home/Skills/skills";
import Footer from "../componenets/shared/footer";
import Navbar from "../componenets/shared/navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <Skills></Skills>
      <Footer></Footer>
    </>
  );
}
