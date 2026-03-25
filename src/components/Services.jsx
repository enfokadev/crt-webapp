import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('animate-in');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            id: 'codi',
            title: 'CODI',
            subtitle: 'Telecomunicaciones',
            description: 'Brindamos soporte técnico especializado con vanguardia tecnológica, operando con exclusividad para garantizar los más altos estándares de cumplimiento. .',
            color: 'blue',
            features: ['Instalación y mantenimiento domiciliario.', 'Atención de averías y soporte técnico.', 'Tecnologías que atendemos HFC, FWA, FTTH y DTH.']
        },
        {
            id: 'activa',
            title: 'ACTIVA',
            subtitle: 'Trade Marketing',
            description: 'Transformamos la presencia de tu marca en resultados reales mediante una ejecución estratégica en el punto de venta. .',
            color: 'orange',
            features: ['Activación y ejecución PDV', '  Implementación y control de materiales POP', 'Auditorías de visibilidad y equipos de impulso']
        },
        {
            id: 'capta',
            title: 'CAPTA',
            subtitle: 'Talento Humano',
            description: 'Conectamos tu empresa con el mejor talento humano calificado, logrando contrataciones masivas en toda Guatemala. .',
            color: 'navy',
            features: ['Reclutamiento masivo y especializado', 'Manejo de planilla y tercerización de personal', 'Contratación flexible bajo demanda']
        }
    ];

    return (
        <section id="services" className="services" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nuestras Divisiones</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">Soluciones adaptadas a las necesidades específicas de cada industria.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-card ${service.color}`}
                            style={{ '--delay': index }}
                        >
                            <div className="service-icon-box">
                                <div className="icon-placeholder"></div>
                            </div>
                            <h3 className="service-name">{service.title}</h3>
                            <h4 className="service-sub">{service.subtitle}</h4>
                            <p className="service-desc">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map(f => <li key={f}>{f}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="services-socials">
                    <a href="https://www.instagram.com/capta_empleosgt?utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.facebook.com/captaempleos" target="_blank" rel="noopener noreferrer" className="social-icon facebook" title="Facebook">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://www.tiktok.com/@capta_empleos?_t=ZM-90KAX3nVF3U&_r=1" target="_blank" rel="noopener noreferrer" className="social-icon tiktok" title="TikTok">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
