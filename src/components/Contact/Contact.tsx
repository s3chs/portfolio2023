import Ellipses from '../../assets/images/Ellipses-white.svg';
import { useContext } from 'react';
import CustomCursorContext from '../CustomCursor/context/CustomCursorContext';

export const Contact = () => {
    const {setType} = useContext(CustomCursorContext);

    const Footer = () => {
        return (
            <div className="footer-container">
                <div className="portfolio-technologies">
                    <span data-scroll data-scroll-class="reveal-text" data-scroll-offset="-50">
                        Made with React, Typescript, SCSS and coffee
                    </span>
                </div>
                <div className="socials-container">
                    <span className="socials-title" data-scroll data-scroll-class="reveal-title" data-scroll-offset="-50">
                        socials
                    </span>
                    <div className="socials-list">
                        <a href="#" data-scroll data-scroll-class="reveal-text" data-scroll-offset="-50">GitHub</a>
                        <a href="#" data-scroll data-scroll-class="reveal-text" data-scroll-offset="-50">LinkedIn</a>
                        <a href="#" data-scroll data-scroll-class="reveal-text" data-scroll-offset="-50">Instagram</a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="contact-container" data-scroll-section>
            <div className="section-title" data-scroll data-scroll-speed="0.8">
                <span data-scroll data-scroll-class="reveal-title"
                      onMouseEnter={() => setType('square')}
                      onMouseLeave={() => setType('default')}
                >
                    Contact
                </span>
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
