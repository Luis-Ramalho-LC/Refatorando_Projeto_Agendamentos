import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import Footer from "./components/Footer.js";
import CriarAgendamento from "./components/agendamentos/CriarAgendamento.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CriarServico from "./components/serviços/CriarServico.js";
import AtualizarServico from "./components/agendamentos/AtualizarServico.js"

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/CriarAgendamento" element={<CriarAgendamento />} />
        <Route path="/CriarServico" element={<CriarServico />} />
        <Route path="/:id" element={<AtualizarServico />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;