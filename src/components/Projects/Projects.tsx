import { Project } from '../Project/Project';
import { lambdaGarments, koji, sneakLove } from './data';

export const Projects = () => {
    return (
        <section id="projects" className="projects-container" data-scroll-section>
            <div className="section-title" data-scroll data-scroll-speed="0.8">
            <span data-scroll data-scroll-class="reveal-title">
                Selected projects
            </span>
            </div>
            <Project project={lambdaGarments}/>
            <Project project={koji}/>
            <Project project={sneakLove}/>
        </section>
    );
};
