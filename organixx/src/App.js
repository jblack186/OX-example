import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Product from './Product';
import MidCarousel from './MidCarousel';

function App() {
  return (
    <div className="App">
      <Hero />
      <Product />
      <MidCarousel />
    </div>
  );
}

export default App;
