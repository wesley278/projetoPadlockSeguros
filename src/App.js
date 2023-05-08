
import './App.css';
import Aside from './Components/Aside';
import Avaliacao from './Components/Avaliacao';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Mobile from './Components/Mobile';
import Section from './Components/Section';
import Servicos from './Components/Servicos';

function App() {
  return (
    <div className="App">
      
       <Header/>
       <Aside/>
       <Section/>
       <Avaliacao/>
       <Mobile/>
       <Servicos/>
       <Footer/>
      
    </div>
  );
}

export default App;
