import './styles/App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div id='App-container'>
      <Menu />
      <div className='main-content'>
        <div>"Lorem ipsum asjdaisjdioajsdojasidjoasj"</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
