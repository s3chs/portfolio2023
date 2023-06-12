import Ellipses from '../../assets/images/Ellipses.svg';
import { useEffect, useRef } from 'react';
import { LoopingElement } from '../Marquee/LoopingElement';
import { Marquee } from '../Marquee/Marquee';

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
        <section className="home-container" data-scroll-section data-scroll data-scroll-speed="8" data-scroll-position="top">
            <div className="hero-container">
                <div className="hero-details" data-scroll data-scroll-speed="3" data-scroll-position="top">
                    <span>portfolio</span>
                    <span>2023</span>
                </div>
                <div className="hero-title">
                    <div className="first-name">
                        <span data-scroll data-scroll-speed="5.30" data-scroll-position="top">p</span>
                        <span data-scroll data-scroll-speed="3.24" data-scroll-position="top">h</span>
                        <span data-scroll data-scroll-speed="4.10" data-scroll-position="top">i</span>
                        <span data-scroll data-scroll-speed="2.50" data-scroll-position="top">l</span>
                        <span data-scroll data-scroll-speed="6.50" data-scroll-position="top">i</span>
                        <span data-scroll data-scroll-speed="3.62" data-scroll-position="top">p</span>
                        <span data-scroll data-scroll-speed="5.43" data-scroll-position="top">p</span>
                        <span data-scroll data-scroll-speed="3.37" data-scroll-position="top">e</span>
                    </div>
                    <div className="hero-lower-group">
                        <img className="ellipses" src={Ellipses} alt="Ellipses logo" data-scroll data-scroll-speed="3.30"
                             data-scroll-delay="0.1" data-scroll-position="top"/>
                        <div className="last-name">
                            <span data-scroll data-scroll-speed="6.69" data-scroll-position="top">b</span>
                            <span data-scroll data-scroll-speed="4.12" data-scroll-position="top">u</span>
                            <span data-scroll data-scroll-speed="5.89" data-scroll-position="top">t</span>
                            <span data-scroll data-scroll-speed="4.65" data-scroll-position="top">e</span>
                            <span data-scroll data-scroll-speed="5.26" data-scroll-position="top">a</span>
                            <span data-scroll data-scroll-speed="4.10" data-scroll-position="top">u</span>
                        </div>
                    </div>
                    <div className="hero-info" data-scroll data-scroll-speed="2.5" data-scroll-position="top">
                        <span className="job-title">Creative front-end developer</span>
                        <span className="geo-info">(from the land of the baguette)</span>
                    </div>
                </div>
                <div className="hero-details" data-scroll data-scroll-speed="3" data-scroll-position="top">
                    <span>bordeaux</span>
                    <span>19:46</span>
                </div>
            </div>
            <div className="marquee">
                <Marquee text={' welcome to my universe '} addRef={addToRefs}/>
            </div>
        </section>
    );
};
