import React from 'react';

const Header = ({ data }) => {
  return (
    <header className="header">
      <h1>{data.nombre}</h1>
      <h2>{data.titulo}</h2>
    </header>
  );
};

export default Header;