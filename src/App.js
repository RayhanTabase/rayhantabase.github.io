import React from 'react';
import Introduction from './Components/Introduction/Introduction';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import NavMenu from './Components/NavMenu/NavMenu';


const App =() => {
  return (
    <>
      <NavMenu />
      <main>
        <Introduction />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
