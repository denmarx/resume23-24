import './styles/App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/Content/About';
import Jobs from './components/Content/Jobs';

const App = () => {
  return (
    <div id='App-container'>
      <Menu />
      <main className='main-content'>
        <Hero />
        <About />
        <Jobs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
