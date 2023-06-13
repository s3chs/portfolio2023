export interface ProjectProps {
    name: {
        text: string,
    };
    info: {
        text: string,
    };
    description: {
        text: string,
    };
    imgs: string[];
    marquee: {
        text: string,
    };
    className: string;
}

export const lambdaGarments: ProjectProps = {
    name: {
        text: 'Lambda Garments',
    },
    info: {
        text: 'Full stack project',
    },
    description: {
        text: 'An e-commerce website made with React and NodeJS. this project originated from my passion with vintage music band shirts.',
    },
    imgs: [
        'https://media.istockphoto.com/id/1333301147/fr/photo/v%C3%AAtements-de-design-imprim%C3%A9s-par-un-designer-singapourien.jpg?s=612x612&w=0&k=20&c=nup-t8F3tKS6rWj6VhsWXlP1YC2mb1pzEMvmL0GAJjs=',
        'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    ],
    marquee: {
        text: ' lambda garments ',
    },
    className: 'lambda-garments',
};

export const koji: ProjectProps = {
    name: {
        text: 'Koji',
    },
    info: {
        text: 'Front end project',
    },
    description: {
        text: 'The Koji Cocktail Bar has been created has a submission for the sixth competition of the Discord of Ecole du Web. This website got me second place at the contest and was created with HTML, SCSS, Javascript and GSAP. ',
    },
    imgs: [
        'https://res.cloudinary.com/dncemocxu/image/upload/v1684764613/Koji/Capture_d_e%CC%81cran_2023-05-22_a%CC%80_15.56.15_nmg9jd.png',
        'https://res.cloudinary.com/dncemocxu/image/upload/v1684764613/Koji/Capture_d_e%CC%81cran_2023-05-22_a%CC%80_15.56.23_d3ge1e.png',
        'https://res.cloudinary.com/dncemocxu/image/upload/v1684764702/Koji/Capture_d_e%CC%81cran_2023-05-22_a%CC%80_16.11.13_h2ynfn.png',
    ],
    marquee: {
        text: ' koji cocktail bar ',
    },
    className: 'koji',
};

export const sneakLove: ProjectProps = {
    name: {
        text: 'Sneak Love',
    },
    info: {
        text: 'Front end project',
    },
    description: {
        text: 'The sneak love project is a website created to express my love for sneakers and 8bit designs. All the designs have been created by me. This website was made with HTML, CSS and JS.',
    },
    imgs: [
        'https://res.cloudinary.com/dncemocxu/image/upload/v1684772085/sneak-love/Capture_d_e%CC%81cran_2023-05-22_a%CC%80_17.57.45_kaamya.png',
        'https://res.cloudinary.com/dncemocxu/image/upload/v1684772085/sneak-love/Capture_d_e%CC%81cran_2023-05-22_a%CC%80_17.58.44_p2tw6l.png',
        'https://res.cloudinary.com/dncemocxu/image/upload/v1684772085/sneak-love/Capture_d_e%CC%81cran_2023-05-22_a%CC%80_17.58.06_g0ynuv.png',
    ],
    marquee: {
        text: ' sneak love ',
    },
    className: 'sneak-love',
};
