import React from 'react';

const About = ({ data }) => {
  return (
    <section className="about-section">
      <h2>SOBRE MÍ</h2>
      <div className="about-content">
        <div className="about-text">
          <p>{data.about}</p>
        </div>
        {data.foto && (
          <div className="about-photo">
            <img src={data.foto} alt="Foto de perfil" />
          </div>
        )}
      </div>
    </section>
  );
};

export default About;