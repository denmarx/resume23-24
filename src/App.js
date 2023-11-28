import './styles/App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/Content/About';
import Jobs from './components/Content/Jobs';
import Projects from './components/Content/Projects';

const App = () => {
  return (
    <div id='App-container'>
      <Menu />
      <main className='main-content'>
        <Hero />
        <About />
        <Jobs />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
