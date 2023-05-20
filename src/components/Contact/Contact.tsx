import Ellipses from '../../assets/images/Ellipses-white.svg';

export const Contact = () => {

    const Footer = () => {
        return (
            <div className="footer-container">
                <span className="portfolio-technologies">
                    Made with React, Typescript, SCSS and coffee
                </span>
                <div className="socials-container">
                    <span className="socials-title">socials</span>
                    <div className="socials-list">
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="contact-container">
            <span className="section-title">Contact</span>
            <div className="contact-informations-container">
                <div className="contact-message-container">
                    <img
                        src={Ellipses}
                        alt="Ellipses-logo"
                        className="ellipse-logo"
                    />
                    <span className="contact-message">Let's keep in touch !</span>
                </div>
                <div className="line-separator"></div>
                <div className="contact-details-container">
                    <span className="pill">philippe.buteau06@gmail.com</span>
                    <span className="pill">+33 6 89 68 09 31</span>
                </div>
            </div>
            <Footer/>
        </section>
    );
};
