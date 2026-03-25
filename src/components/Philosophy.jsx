import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    const pillars = [
        {
            title: 'Liderazgo con el ejemplo',
            description: 'No es un cargo, es una actitud diaria que inspira y transforma desde cualquier rol.',
            icon: '🏆'
        },
        {
            title: 'Pasión por Servir',
            description: 'Somos aliados estratégicos que resuelven con agilidad lo que a otros les complica.',
            icon: '❤️'
        },
        {
            title: 'Vanguardia y Mejora',
            description: 'Innovamos y adoptamos nuevas tecnologías para planificar mejor y generar mayor impacto.',
            icon: '📈'
        }
    ];

    return (
        <section id="philosophy" className="philosophy">
            <div className="container">
                <div className="philosophy-layout">
                    <div className="philosophy-text">
                        <h5 className="sub-tag">Nuestra Manera de Ser</h5>
                        <h2 className="section-title">Nuestra Filosofía</h2>
                        <p className="philosophy-intro">
                            En Centrarecursos Técnicos, trabajar bien trasciende el cumplimiento; buscamos generar un impacto real en cada acción. Representamos a cada marca como propia, honrando la confianza de nuestros clientes a través de la excelencia.
                        </p>
                        <div className="pillars-list">
                            {pillars.map(pillar => (
                                <div key={pillar.title} className="pillar-item">
                                    <span className="pillar-icon">{pillar.icon}</span>
                                    <div>
                                        <h3>{pillar.title}</h3>
                                        <p>{pillar.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="philosophy-quote glass-effect">
                        <blockquote>
                            "La cultura no es lo que se dice en un mural. Es lo que se vive cuando nadie esta viendo."
                            <span>— AO</span>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
