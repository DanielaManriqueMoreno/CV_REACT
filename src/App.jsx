import React from 'react';
import {  cvDatos } from './Datos/cvDatos';
import Header from './Componentes/Header';
import About from './Componentes/About';
import Educacion from './Componentes/Educacion';
import Experiencia from './Componentes/Experiencia';
import Habilidades from './Componentes/Habilidades';
import Idiomas from './Componentes/Idiomas';
import Contacto from './Componentes/Contacto';
import Descarga from './Componentes/Descarga';
import './App.css';

function App() {
  return (
    <Descarga>
      <div className="app-container">
        <Header data={cvDatos} />
        <div className="main-content">
          <div className="left-column">
            <About data={cvDatos} />
            <Habilidades data={cvDatos} />
            <Idiomas data={cvDatos} />
            <Contacto data={cvDatos} />
          </div>
          <div className="right-column">
            <Educacion data={cvDatos} />
            <Experiencia data={cvDatos} />
          </div>
        </div>
      </div>
    </Descarga>
  );
}

export default App;