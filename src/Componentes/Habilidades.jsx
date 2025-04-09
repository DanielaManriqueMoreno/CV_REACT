import React from 'react';

const Habilidades = ({ data }) => {
  return (
    <section className="habilidades-section">
      <h2>HABILIDADES</h2>
      <div className="habilidades-list">
        {data.habilidades.map((habilidad, index) => (
          <div key={index} className="habilidad-item">
            <div className="habilidad-titulo">
              {habilidad.name} ({habilidad.level}%)
            </div>
            <div className="habilidad-barra">
              <div
                className="habilidad-barra-completada"
                style={{ width: `${habilidad.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
