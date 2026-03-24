import Header from './components/Header.js'
import HomePage from './components/HomePage.js'
import Footer from './components/Footer.js'
import CriarAgendamento from './components/CriarAgendamento.js';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import CriarServico from './components/CriarServico.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/CriarAgendamento" element={<CriarAgendamento/>}/>
        <Route path="/CriarServico" element={<CriarServico/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
