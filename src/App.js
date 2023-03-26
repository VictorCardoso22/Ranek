import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './Component/Produtos';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Contato from './Component/Contato';
import Produto from './Component/Produto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
