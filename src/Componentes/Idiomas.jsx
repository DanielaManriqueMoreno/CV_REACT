import React from 'react';

const Idiomas = ({ data }) => {
  return (
    <section className="idiomas-section">
      <h2>IDIOMAS</h2>
      <ul>
        {data.idiomas.map((idioma, index) => (
          <li key={index}>
            <span className="idioma-name">{idioma.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Idiomas;