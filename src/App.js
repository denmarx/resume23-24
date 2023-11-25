import './styles/App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/Content/About';

const App = () => {
  return (
    <div id='App-container'>
      <Menu />
      <main className='main-content'>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
