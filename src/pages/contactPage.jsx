import React from 'react'
import NavbarMenu from "../components/navbarMenu";
import Hero from '../components/hero';
import Contact from '../components/contact';
import BottomHero from '../components/bottomHero';
import Footer from '../components/footer';
const ContactPage = () => {
  return (
    <div>
          <NavbarMenu />
          <Hero h1='Contact Us' display='hidden' section='dua'/>
          <Contact />
          <BottomHero/>
          <Footer/>
    </div>
  )
}

export default ContactPage