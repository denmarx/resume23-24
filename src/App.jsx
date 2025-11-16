import './styles/App.css';
// import Menu from './components/Menu/Menu';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import WhatIDo from './components/Content/WhatIDo';
import About from './components/Content/About';
import ClarityEnginePreview from './components/Content/ClarityEnginePreview';
import Contact from './components/Content/Contact';
import ClarityEngine from './pages/ClarityEngine';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div id='App-container'>
      <Nav />
      <ScrollToTop />

      <main className='main-content fillHeight'>
        <Routes>

          {/* Home page route - restructured for clarity-focused value prop */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <WhatIDo />
                <About />
                <ClarityEnginePreview />
                <Contact />
              </>
            } 
          />

          {/* Clarity Engine full program page */}
          <Route path="/clarity-engine" element={<ClarityEngine />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
