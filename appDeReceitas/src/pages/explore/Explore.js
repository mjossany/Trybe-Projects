import React from 'react';
import { Link } from 'react-router-dom';
import HeaderWithoutSearch from '../../components/header/HeaderWithoutSearch';
import FooterMenu from '../../components/FooterMenu/FooterMenu';
import './Explore.css';

const Explore = () => (
  <div>
    <HeaderWithoutSearch>Explorar</HeaderWithoutSearch>
    <Link to="/explorar/comidas">
      <button
        className="explore-btn"
        type="button"
        data-testid="explore-food"
      >
        Explorar Comidas
      </button>
    </Link>
    <Link to="/explorar/bebidas">
      <button
        className="explore-btn"
        type="button"
        data-testid="explore-drinks"
      >
        Explorar Bebidas
      </button>
    </Link>
    <FooterMenu />
  </div>
);

export default Explore;
