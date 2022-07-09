import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Calculadora from './components/calculadora/Calculadora';

function App() {
  return (
    <div >
     <Header nome="Matheus"/>
     <Footer/>
     <Calculadora/>
    </div>
  );
}

export default App;
