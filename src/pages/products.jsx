import React from 'react'
import NavbarMenu from '../components/navbarMenu'
import Hero from '../components/hero'
import BuySection from '../components/buySection'
import HomeTabsData from '../components/homeTabsCard'
import BottomHero from '../components/bottomHero'
import Footer from '../components/footer'

const Products = () => {
  return (
      <div>
        <NavbarMenu/>
        <Hero section='dua' h1='introduce Our Products | Nengnanum Beauty' display='hidden'/>
      <BuySection />
      <HomeTabsData/>
        <BottomHero/>
        <Footer/>
    </div>
  )
}

export default Products