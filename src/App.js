import './styles/App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div id='App-container'>
      <Menu />
      <div className='main-content'>
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
