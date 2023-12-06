import './styles/App.css';
import Menu from './components/Menu/Menu';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/Content/About';
import Jobs from './components/Content/Jobs';
import Projects from './components/Content/Projects';
import Contact from './components/Content/Contact';

const App = () => {
  return (
    <div id='App-container'>
      {/* <Menu /> */}
      <Nav />
      <main className='main-content fillHeight'>
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
