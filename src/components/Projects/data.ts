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
        'https://res.cloudinary.com/dncemocxu/image/upload/v1687424162/Lambda%20Garments/Capture_d_e%CC%81cran_2023-06-21_a%CC%80_15.14.04_ltzibj.png',
        'https://res.cloudinary.com/dncemocxu/image/upload/v1687424162/Lambda%20Garments/Capture_d_e%CC%81cran_2023-06-21_a%CC%80_15.14.22_b00s8k.png',
        'https://res.cloudinary.com/dncemocxu/image/upload/v1636031435/Lambda%20Garments/packshot%20FINAL/2Z1A9825_lq2dzl.jpg',
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
