type technology = string;

export const About = () => {

    const technologies: technology[] = [
        'HTML',
        'SCSS',
        'Javascript',
        'Typescript',
        'React',
        'NextJS',
        'Figma',
        'NodeJS',
        'MongoDB',
        'C#',
        '.NET',
        'SQL',
    ];

    const listOfTechnologies = () => {
        return technologies.map((technology, i) => {
            return (
                <div key={i} className="pill">
                    <span data-scroll data-scroll-class="reveal-pill" style={{transitionDelay: `${i * 0.03}s`}}>
                        {technology}
                    </span>
                </div>
            );
        });
    };

    return (
        <section className="about-container" data-scroll-section>
            <div className="section-title" data-scroll data-scroll-speed="0.8">
                <span data-scroll data-scroll-class="reveal-title">About</span>
            </div>
            <div className="greetings" data-scroll data-scroll-speed="1">
                <span data-scroll data-scroll-class="reveal-text">
                Hello there :DDD
                </span>
            </div>
            <div className="biography" data-scroll data-scroll-speed="1">
                <span data-scroll data-scroll-class="reveal-text">
                    My name is Philippe, I’m a 29 years old front end developer with a strong love for UI/UX.
                </span>
            </div>
            <div className="biography" data-scroll data-scroll-speed="1">
                <span data-scroll data-scroll-class="reveal-text">
            I have been developing for 2 years and a half and I really wish to become a master in creative designs and pixel perfect
            websites.
                </span>
            </div>
            <div className="biography" data-scroll data-scroll-speed="1">
                <span data-scroll data-scroll-class="reveal-text">
                    From simple, minimalistic designs to more complex ones, I’m not afraid of implementing new solutions and like to challenge
            myself.
                </span>
            </div>
            <div className="line-separator" data-scroll data-scroll-speed="1" data-scroll-class="reveal-line-separator"></div>
            <div className="technologies-used-title" data-scroll data-scroll-speed="1">
                <span data-scroll data-scroll-class="reveal-text">
                    Technologies I use
                </span>
            </div>
            <div className="technologies-used-container" data-scroll data-scroll-speed="1">
                {listOfTechnologies()}
            </div>
        </section>
    );
};
