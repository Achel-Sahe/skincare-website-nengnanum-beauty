import React from "react";
import NavbarMenu from "../components/navbarMenu";
import Hero from "../components/hero";
import ArticlesTabsData from "../components/articlesTabsCard";
import HomeArticle from "../components/homeArticle";
import BottomHero from "../components/bottomHero";
import Footer from "../components/footer";
import SmoothScroll from "../components/smoothScroll";
import ScrollReveal from "../components/scrollReveal";
const Articles = () => {
  return (
    <div>
      <SmoothScroll />
      <ScrollReveal/>

      {/* page components */}
      <NavbarMenu />
      <Hero
        section="dua"
        h1="Our Journal | Nengnanum Beauty"
        display="hidden"
      />
      <HomeArticle />
      <ArticlesTabsData />
      <BottomHero />
      <Footer />
    </div>
  );
};

export default Articles;
