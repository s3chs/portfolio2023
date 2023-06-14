import Ellipses from '../../assets/images/Ellipses.svg';
import { useEffect, useRef, useState } from 'react';
import { LoopingElement } from '../Marquee/LoopingElement';
import { Marquee } from '../Marquee/Marquee';

const Clock = () => {
    const [time, setTime] = useState(getFormattedTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getFormattedTime());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function getFormattedTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return <div>{time}</div>;
};

export default Clock;

export const Home = () => {

    const refs: React.MutableRefObject<any> = useRef([]);

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        new LoopingElement(refs.current[0], 0, 0.007);
        new LoopingElement(refs.current[1], -100, 0.007);
    }, []);

    return (
        <section id="home" className="home-container" data-scroll-section data-scroll data-scroll-speed="8" data-scroll-position="top">
            <div className="hero-container">
                <div className="hero-details" data-scroll data-scroll-speed="3" data-scroll-position="top">
                    <span>portfolio</span>
                    <span>2023</span>
                </div>
                <div className="hero-title">
                    <div className="first-name">
                        <span data-scroll data-scroll-speed="3.84" data-scroll-position="top">p</span>
                        <span data-scroll data-scroll-speed="3.12" data-scroll-position="top">h</span>
                        <span data-scroll data-scroll-speed="2.55" data-scroll-position="top">i</span>
                        <span data-scroll data-scroll-speed="2.76" data-scroll-position="top">l</span>
                        <span data-scroll data-scroll-speed="4.56" data-scroll-position="top">i</span>
                        <span data-scroll data-scroll-speed="3.15" data-scroll-position="top">p</span>
                        <span data-scroll data-scroll-speed="2.67" data-scroll-position="top">p</span>
                        <span data-scroll data-scroll-speed="3.78" data-scroll-position="top">e</span>
                    </div>
                    <div className="hero-lower-group">
                        <img className="ellipses" src={Ellipses} alt="Ellipses logo" data-scroll data-scroll-speed="4.30"
                             data-scroll-position="top"/>
                        <div className="last-name">
                            <span data-scroll data-scroll-speed="7.69" data-scroll-position="top">b</span>
                            <span data-scroll data-scroll-speed="5.72" data-scroll-position="top">u</span>
                            <span data-scroll data-scroll-speed="6.89" data-scroll-position="top">t</span>
                            <span data-scroll data-scroll-speed="6.65" data-scroll-position="top">e</span>
                            <span data-scroll data-scroll-speed="7.26" data-scroll-position="top">a</span>
                            <span data-scroll data-scroll-speed="6.30" data-scroll-position="top">u</span>
                        </div>
                    </div>
                    <div className="hero-info" data-scroll data-scroll-speed="2.5" data-scroll-position="top">
                        <span className="job-title">Creative front-end developer</span>
                        <span className="geo-info">(from the land of the baguette)</span>
                    </div>
                </div>
                <div className="hero-details" data-scroll data-scroll-speed="3" data-scroll-position="top">
                    <span>bordeaux</span>
                    <Clock/>
                </div>
            </div>
            <div className="marquee">
                <Marquee text={' welcome to my universe '} addRef={addToRefs}/>
            </div>
        </section>
    );
};
