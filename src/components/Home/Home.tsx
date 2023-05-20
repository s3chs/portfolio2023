import Ellipses from '../../assets/images/Ellipses.svg';
import { useEffect, useRef } from 'react';
import { LoopingElement } from './LoopingElement';

export const Home = () => {

    const refs: React.MutableRefObject<any> = useRef([]);

    const addToRefs = (el: HTMLDivElement) => {
        console.log(el);
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        new LoopingElement(refs.current[0], 0, 0.01);
        new LoopingElement(refs.current[1], -100, 0.01);
    }, []);

    const Marquee = () => {
        return <>
            <div ref={addToRefs} className="marquee-text"> welcome to my <span>universe</span> welcome to my <span>universe</span> welcome to
                my <span>universe</span> welcome to my <span>universe</span> welcome
                to my <span>universe</span> welcome to my <span>universe</span> welcome to my <span>universe</span> welcome to
                my <span>universe</span> welcome to my <span>universe</span> welcome to my
                <span>universe</span> welcome to my <span>universe</span> welcome to my <span>universe</span> welcome to
                my <span>universe</span> welcome
                to my <span>universe</span> welcome to my <span>universe</span> welcome to my <span>universe</span> welcome to
                my <span>universe</span> welcome to my <span>universe</span>&nbsp;
            </div>
            <div ref={addToRefs} className="marquee-text"> welcome to my <span>universe</span> welcome to my <span>universe</span> welcome to
                my <span>universe</span> welcome to my <span>universe</span> welcome
                to my <span>universe</span> welcome to my <span>universe</span> welcome to my <span>universe</span> welcome to
                my <span>universe</span> welcome to my <span>universe</span> welcome to my
                <span>universe</span> welcome to my <span>universe</span> welcome to my <span>universe</span> welcome to
                my <span>universe</span> welcome
                to my <span>universe</span> welcome to my <span>universe</span> welcome to my <span>universe</span> welcome to
                my <span>universe</span> welcome to my <span>universe</span>&nbsp;
            </div>
        </>;
    };

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
                    <div className="hero-info">
                        <span className="job-title">Creative front-end developer</span>
                        <span className="geo-info">(from the land of the baguette)</span>
                    </div>
                </div>
                <div className="hero-details">
                    <span>bordeaux</span>
                    <span>19:46</span>
                </div>
            </div>
            <div className="marquee-container">
                <Marquee/>
            </div>
        </section>
    );
};
