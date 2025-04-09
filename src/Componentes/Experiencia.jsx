import React from 'react';

const Experiencia = ({ data }) => {
  return (
    <section className="experiencia-section">
      <h2>EXPERIENCIA</h2>
      {data.experiencia && data.experiencia.length > 0 ? (
        data.experiencia.map((item, index) => (
          <div key={index} className="experiencia-item">
            <h3>{item.position}</h3>
            <p className="experiencia-company">{item.company} • {item.year}</p>
            <p className="experiencia-description">{item.description}</p>
          </div>
        ))
      ) : (
        <p>No hay experiencia registrada aún</p>
      )}
    </section>
  );
};

export default Experiencia;