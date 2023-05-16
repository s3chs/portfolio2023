import Ellipses from '../../assets/images/Ellipses.svg';

export const Home = () => {

    return (
        <section className="home-container">
            <div className="hero-container">
                <div className="hero-details">
                    <span>portfolio</span>
                    <span>2023</span>
                </div>
                <div className="hero-title">
                    <p className="first-name">philippe</p>
                    <div className="hero-lower-group">
                        <img className="ellipses" src={Ellipses} alt="Ellipses logo"/>
                        <p className="last-name">buteau</p>
                    </div>
                </div>
                <div className="hero-info">
                    <span className="job-title">Creative front-end developer</span>
                    <span className="geo-info">(from the land of the baguette)</span>
                </div>
                <div className="hero-details">
                    <span>bordeaux</span>
                    <span>19:46</span>
                </div>
            </div>
            <div className="marquee-container"></div>
        </section>
    );
};
