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
                <span key={i} className="pill">
                    {technology}
                </span>
            );
        });
    };

    return (
        <section className="about-container">
            <span className="section-title">About</span>
            <span className="greetings">Hello there :DDD</span>
            <span className="biography">
                My name is Philippe, I’m a 29 years old front end developer with a strong love for UI/UX.
                </span>
            <span className="biography">
            I have been developing for 2 years and a half and I really wish to become a master in creative designs and pixel perfect
            websites.
            </span>
            <span className="biography">
            From simple, minimalistic designs to more complex ones, I’m not afraid of implementing new solutions and like to challenge
            myself.
            </span>
            <div className="line-separator"></div>
            <span className="technologies-used-title">
                    Technologies I use
                </span>
            <div className="technologies-used-container">
                {listOfTechnologies()}
            </div>
        </section>
    );
};
