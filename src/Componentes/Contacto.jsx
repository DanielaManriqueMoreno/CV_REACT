import React from 'react';

const Contacto = ({ data }) => {
  return (
    <section className="contacto-section">
      <h2>CONTACTO</h2>
      <ul>
        {data.contacto.map((item, index) => (
          <li key={index} className="contacto-item">
            <span className="contacto-icon">{item.icon}</span>
            <div className="contacto-info">
              <span className="contacto-name">{item.name}:</span>{" "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-link"
              >
                {item.value}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacto;
