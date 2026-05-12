"use client";

import AboutSection from "../componenets/home/aboutSection";
import Banner from "../componenets/home/banner";
import Footer from "../componenets/shared/footer";
import Navbar from "../componenets/shared/navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <Footer></Footer>
    </>
  );
}
