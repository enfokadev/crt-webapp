import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content reveal">
                <h5 className="hero-subtitle">CentraRecursos Técnicos</h5>
                <h1 className="hero-title">
                    Eficiencia, <span className="highlight">Tecnología</span> y Talento Humano.
                </h1>
                <p className="hero-description">
                    Más de 20 años de experiencia brindando soluciones operativas y tecnológicas transformando la ejecución en resultados reales.
                </p>
                <div className="hero-actions">
                    <a href="#services" className="btn-premium btn-primary">Nuestros Servicios</a>
                    <a href="#philosophy" className="btn-premium btn-outline">Nuestra Filosofía</a>
                </div>
            </div>
            <div className="hero-bg-overlay"></div>
        </section>
    );
};

export default Hero;
