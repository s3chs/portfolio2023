import Ellipses from '../../assets/images/Ellipses-white.svg';
import { useContext } from 'react';
import CustomCursorContext from '../CustomCursor/context/CustomCursorContext';

export const Contact = () => {
    const {setType} = useContext(CustomCursorContext);

    const Footer = () => {

        return (
            <div className="footer-container" data-scroll data-scroll-speed="2">
                <div className="portfolio-technologies">
                    <span>
                        Made with React, Typescript, SCSS and coffee
                    </span>
                </div>
                <div className="socials-container">
                    <span className="socials-title">
                        socials
                    </span>
                    <div className="socials-list">
                        <a
                            href="https://github.com/s3chs"
                            target="_blank"
                            onMouseEnter={() => setType('link')}
                            onMouseLeave={() => setType('default')}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/philippe-buteau06/"
                            target="_blank"
                            onMouseEnter={() => setType('link')}
                            onMouseLeave={() => setType('default')}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/phil.but/"
                            target="_blank"
                            onMouseEnter={() => setType('link')}
                            onMouseLeave={() => setType('default')}
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="contact" className="contact-container" data-scroll-section>
            <div className="section-title" data-scroll data-scroll-speed="0.8">
                <span data-scroll data-scroll-class="reveal-title">Contact</span>
            </div>
            <div className="contact-informations-container" data-scroll data-scroll-speed="0.5">
                <div className="contact-message-container" data-scroll>
                    <img
                        src={Ellipses}
                        alt="Ellipses-logo"
                        className="ellipse-logo"
                        data-scroll data-scroll-class="reveal-logo"
                    />
                    <div className="contact-message">
                        <span data-scroll data-scroll-class="reveal-text">
                            Let's keep in touch !
                        </span>
                    </div>
                </div>
                <div className="line-separator" data-scroll data-scroll-class="reveal-line-separator"></div>
                <div className="contact-details-container">
                    <span className="pill" data-scroll data-scroll-class="reveal-pill">philippe.buteau06@gmail.com</span>
                    <span className="pill" data-scroll data-scroll-class="reveal-pill">+33 6 89 68 09 31</span>
                </div>
            </div>
            <Footer/>
        </section>
    );
};
