import React from 'react';

const Educacion = ({ data }) => {
  return (
    <section className="educacion-section">
      <h2>EDUCACIÓN</h2>
      {data.educacion.map((item, index) => (
        <div key={index} className="educacion-item">
          <div className="educacion-icon">{item.icon}</div>
          <div className="educacion-details">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span className="educacion-year">{item.year}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Educacion;