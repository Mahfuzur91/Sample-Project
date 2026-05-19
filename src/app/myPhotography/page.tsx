"use client";

import MyPhotography from "@/src/componenets/myPhotography/myPhotography";
import Footer from "@/src/componenets/shared/footer";
import Navbar from "@/src/componenets/shared/navbar";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MyPhotography></MyPhotography>
      <Footer></Footer>
    </div>
  );
};

export default page;
