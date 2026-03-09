import React from "react";
import NavbarMenu from "../components/navbarMenu";
import Hero from "../components/hero";
import Contact from "../components/contact";
import BottomHero from "../components/bottomHero";
import Footer from "../components/footer";
import SmoothScroll from "../components/smoothScroll";
import ScrollReveal from "../components/scrollReveal";
const ContactPage = () => {
  return (
    <div>
      <SmoothScroll />
      <ScrollReveal />
      
      {/* page components */} 
      <NavbarMenu />
      <Hero h1="Contact Us" display="hidden" section="dua" />
      <Contact />
      <BottomHero />
      <Footer />
    </div>
  );
};

export default ContactPage;
