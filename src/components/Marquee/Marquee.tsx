interface MarqueeProps {
    text: string;
    addRef: (el: HTMLDivElement) => void;
}

export const Marquee = ({text, addRef}: MarqueeProps) => {

    return <div className="marquee-container">
        <div ref={addRef} className="marquee-text">
            <span>
                {text.repeat(30)}
            </span>
            &nbsp;
        </div>
        <div ref={addRef} className="marquee-text">
            <span>
                {text.repeat(30)}
            </span>
            &nbsp;
        </div>
    </div>;
};
