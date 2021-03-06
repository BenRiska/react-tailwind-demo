import './App.css';
import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Content/>
      <Dropdown/>
      <Footer/>
    </ >
  );
}

export default App;
