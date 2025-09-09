import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleLinkClick = () => {
    setMenuAberto(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <h1 className="logo-text">
            <span>USF + ACS</span>
            Maria Rita <span className="equipe-numero">Equipe 2</span>
          </h1>
        </Link>

        <div className="menu-hamburger" onClick={() => setMenuAberto(!menuAberto)}>
          <div className={menuAberto ? "barra barra-1-ativa" : "barra"}></div>
          <div className={menuAberto ? "barra barra-2-ativa" : "barra"}></div>
          <div className={menuAberto ? "barra barra-3-ativa" : "barra"}></div>
        </div>

        <nav>
          <ul className={menuAberto ? "nav-links nav-links-ativo" : "nav-links"}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
                Sobre Nós
              </NavLink>
            </li>
            <li>
              <NavLink to="/equipe" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
                Nossa Equipe
              </NavLink>
            </li>
            <li>
              <NavLink to="/servicos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
                Serviços
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;