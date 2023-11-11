import './styles/App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import HeaderImg from './assets/dev.png';
import styles from './components/Menu/animations.module.css';

const App = () => {
  return (
    <div id='App-container'>
      <Menu />
      <img src={HeaderImg} className={styles.imageReveal} alt='HeaderImg' />
      <div className='main-content'>
        <div>"Lorem ipsum asjdaisjdioajsdojasidjoasj"</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
