export class LoopingElement {
    element;
    currentTranslation;
    speed;
    lerp: {current: number, target: number, ease: number};
    metric: number;
    direction: boolean;
    scrollTop: number;

    constructor(element: any, currentTranslation: number, speed: number) {
        this.element = element;
        this.currentTranslation = currentTranslation;
        this.speed = speed;
        this.metric = 100;
        this.direction = true;
        this.scrollTop = 0;

        this.lerp = {
            current: this.currentTranslation,
            target: this.currentTranslation,
            ease: 0.1,
        };

        this.events();
        this.render();
    }

    events() {
        window.addEventListener('scroll', () => {
            console.log("yeah");
            let direction = window.scrollY;
            if (direction > this.scrollTop) {
                this.direction = true;
                this.lerp.target += this.speed * 2;
            } else {
                this.direction = false;
                this.lerp.target -= this.speed * 2;
            }
            this.scrollTop = direction <= 0 ? 0 : direction;
        });
    }

    lerpFunc(current: any, target: any, ease: any) {
        this.lerp.current = current * (1 - ease) + target * ease;
    }

    right() {
        this.lerp.target += this.speed;
        if (this.lerp.target > this.metric) {
            this.lerp.current -= this.metric * 2;
            this.lerp.target -= this.metric * 2;
        }
    }

    left() {
        this.lerp.target -= this.speed;
        if (this.lerp.target < -this.metric) {
            this.lerp.current -= -this.metric * 2;
            this.lerp.target -= -this.metric * 2;
        }
    }

    animate() {
        this.direction ? this.right() : this.left();
        this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.ease);
        this.element.style.transform = `translateX(${this.lerp.current}%)`;
    }

    render() {
        this.animate();
        window.requestAnimationFrame(() => this.render());
    }
}
