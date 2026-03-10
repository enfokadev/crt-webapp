import React from 'react';
import './Footer.css';
import logo from '../assets/logo_crt.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src={logo} alt="CRT Logo" className="footer-logo" />
                        <p>CentraRecursos Técnicos S.A.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#hero">Inicio</a>
                        <a href="#services">Servicios</a>
                        <a href="#philosophy">Filosofía</a>
                        <a href="#contact">Contacto</a>
                    </div>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/capta_empleosgt?utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://www.facebook.com/captaempleos" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="https://www.tiktok.com/@capta_empleos?_t=ZM-90KAX3nVF3U&_r=1" target="_blank" rel="noopener noreferrer" title="TikTok">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/centrarecursos-t%C3%A9cnicos/?viewAsMember=true" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                    <div className="footer-copy">
                        <p>&copy; {new Date().getFullYear()} CRT - Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
