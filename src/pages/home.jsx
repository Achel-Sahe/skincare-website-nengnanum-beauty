import React from "react";
import Hero from "../components/hero";
import HomeArticle from "../components/homeArticle";
import TabsSwitch from "../components/tabsSwitch";
import ArticleCard from "../components/articleCard";
import GeneralCards from "../components/generalCards";
import TransparantCard from "../components/transparantCard";
import BottomHero from "../components/bottomHero";
import Footer from "../components/footer";
import NavbarMenu from "../components/navbarMenu";
import HomeTabsCard from "../components/homeTabsCard";

const Home = () => {
  return (
    <div>
      <NavbarMenu />
      <Hero
        h1='Softness You Can Feel, Confidence You Can See'
        p='Discover soft, radiant skin with Nengnanum’s premium skincare line.'
        button='Jelajahi Produk →' />
      <HomeArticle />
      <HomeTabsCard/>
      <div className="article-section">
        <ArticleCard
          header="ARTIKEL"
          judul="How Nengnanum Helps You Care for Your Skin Better"
          isi="Nengnanum membantu kamu merawat kulit lebih baik dengan rangkaian perawatan harian yang membersihkan, menyeimbangkan, menghidrasi, dan melembapkan kulit sehingga terasa lebih sehat dan nyaman sepanjang hari."
          Card={GeneralCards}
          button="EXPLORE MORE →"
          />
      </div>
      <div className="article-section dua">
        <ArticleCard
          header="KOMITMEN KAMI"
          judul="How Nengnanum Helps You Care for Your Skin Better"
          isi="Nengnanum membantu kamu merawat kulit lebih baik dengan rangkaian perawatan harian yang membersihkan, menyeimbangkan, menghidrasi, dan melembapkan kulit sehingga terasa lebih sehat dan nyaman sepanjang hari."
          Card={TransparantCard}
          button="READ MORE →"
          />
      </div>
      <BottomHero />
      <Footer />
    </div>
  );
};

export default Home;
