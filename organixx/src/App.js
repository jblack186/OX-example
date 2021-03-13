import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Product from './Product';
import MidCarousel from './MidCarousel';
import Middle from './Middle';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Product />
      <Middle />
      <MidCarousel />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
