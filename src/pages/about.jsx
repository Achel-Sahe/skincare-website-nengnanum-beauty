import React from "react";
import NavbarMenu from "../components/navbarMenu";
import Hero from "../components/hero";
import ProductsAbout from "../components/productsAbout";
import SimpleAbout from "../components/simpleAbout";
import Footer from "../components/footer";
import BottomHero from "../components/bottomHero";
import Ingredients from "../components/ingredients";
import ScrollStuck from "../components/scrollStuck";
import ScrollReveal from "../components/scrollReveal";

const About = () => {
  return (
    <div>
      <ScrollReveal />

      <NavbarMenu />
      <Hero section="dua" h1="Soft skin starts here" display="hidden" />
      <ProductsAbout />
      <SimpleAbout />
      <Ingredients />
      <ScrollStuck />
      <div className="scroll-overlay"></div>
      <BottomHero />
      <Footer />
    </div>
  );
};

export default About;
