import React from "react";
import NavbarMenu from "../components/navbarMenu";
import Hero from "../components/hero";
import BuySection from "../components/buySection";
import HomeTabsData from "../components/homeTabsCard";
import BottomHero from "../components/bottomHero";
import Footer from "../components/footer";
import SmoothScroll from "../components/smoothScroll";
import ScrollReveal from "../components/scrollReveal";

const Products = () => {
  return (
    <div>
      <SmoothScroll />
      <ScrollReveal/>
      {/* page components */}
      <NavbarMenu />
      <Hero
        section="dua"
        h1="introduce Our Products "
        display="hidden"
      />
      <BuySection />
      <HomeTabsData />
      <BottomHero />
      <Footer />
    </div>
  );
};

export default Products;
