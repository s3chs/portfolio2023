import { useEffect, useRef } from 'react';

export const Introduction = () => {
    const refs: React.MutableRefObject<any> = useRef([]);
    const containerRef = useRef<any>();

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            refs.current.forEach((ref: any) => ref.classList.add('reveal-text'));
            setTimeout(() => {
                containerRef.current.classList.add('out');
                setTimeout(() => {
                    containerRef.current.style.display = 'none';
                }, 1000);
            }, 2500);
        }, 500);
    }, []);

    return (
        <div ref={containerRef} className="introduction-container">
            <div className="introduction-text">
                <span ref={addToRefs}>h</span>
                <span ref={addToRefs}>e</span>
                <span ref={addToRefs}>l</span>
                <span ref={addToRefs}>l</span>
                <span ref={addToRefs}>o</span>
                <span ref={addToRefs}>&nbsp;</span>
                <span ref={addToRefs}>w</span>
                <span ref={addToRefs}>o</span>
                <span ref={addToRefs}>r</span>
                <span ref={addToRefs}>l</span>
                <span ref={addToRefs}>d</span>
            </div>
        </div>
    );
};
