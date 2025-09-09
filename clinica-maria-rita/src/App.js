import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Equipe from './pages/Equipe';
import Servicos from './pages/Servicos';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;