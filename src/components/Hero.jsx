import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content reveal">
                <h5 className="hero-subtitle">CentraRecursos Técnicos</h5>
                <h1 className="hero-title">
                    Tu marca, <span className="highlight">en las</span> mejores manos.
                </h1>
                <p className="hero-description">
                    Elevamos la ejecución de tus proyectos con vanguardia tecnológica y el mejor talento humano de Guatemala. Más de 20 años transformando desafíos operativos en resultados reales con precisión, integridad y eficiencia responsable.
                </p>
                <div className="hero-actions">
                    <a href="#services" className="btn-premium btn-primary">Nuestros Soluciones</a>
                    <a href="#philosophy" className="btn-premium btn-outline">Nuestra Filosofía</a>
                </div>
            </div>
            <div className="hero-bg-overlay"></div>
        </section>
    );
};

export default Hero;
