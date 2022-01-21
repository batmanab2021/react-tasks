
import './App.css';
import Carousel from './components/carousel';
import Content from './components/content';
import Counter from './components/counter';
import Footer from './components/footer';
import Jumbotron from './components/jumbo';
import Navbar from './components/nav';

function App() {
  return (
    <div className="App">
    <Counter/>
    <Navbar/>
    <Jumbotron/>
    <Content/>
    <Carousel/>
    <Footer/>

    </div>
  );
}

export default App;
