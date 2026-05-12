"use client";

import ContactForm from "@/src/componenets/contact/contactForm";
import Footer from "@/src/componenets/shared/footer";
import Navbar from "@/src/componenets/shared/navbar";

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <ContactForm></ContactForm>
      <Footer></Footer>
      <h1>This is Contact page</h1>
    </>
  );
};

export default Contact;
