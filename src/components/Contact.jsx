import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:Info@centrarecursostecnicos.com.gt?subject=Contacto desde Web - ${formData.name}&body=${formData.message}%0D%0A%0D%0AEnviado por: ${formData.email}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="section-title">Contáctanos</h2>
                        <p>Estamos listos para transformar tus desafíos en soluciones operativas de alto impacto. Conectemos para potenciar tu empresa con vanguardia tecnológica y el mejor talento de Guatemala.</p>

                        <div className="info-items">
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <p>Guatemala, Cobertura Nacional</p>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">✉️</span>
                                <p>Info@centrarecursostecnicos.com.gt</p>
                            </div>

                            {/* WhatsApp Box */}
                            <a href="https://wa.me/50240323432" target="_blank" rel="noopener noreferrer" className="whatsapp-box glass-effect">
                                <span className="whatsapp-icon">
                                    <svg viewBox="0 0 448 512" width="32" height="32" fill="currentColor">
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.7 27.2 106.2 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 446.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 365.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.4 0 101.7-82.8 184.5-184.5 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                </span>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <p>+502 4032 3432</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container glass-effect">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Nombre Completo"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    rows="5"
                                    placeholder="¿En qué podemos ayudarle?"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-premium btn-primary w-full">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
