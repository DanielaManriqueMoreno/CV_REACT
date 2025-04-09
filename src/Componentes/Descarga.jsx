import React from 'react';

const Descarga = ({ children }) => {
  return (
    <div>
      {/* Botón que enlaza directamente al PDF */}
      <a href="/cv_DanielaManrique.pdf" download className="download-button">
        Descargar CV como PDF
      </a>

      {/* Contenido que se muestra */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default Descarga;
