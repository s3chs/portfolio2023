import { useContext, useEffect, useRef } from 'react';
import { LoopingElement } from '../Marquee/LoopingElement';
import { ProjectProps } from '../Projects/data';
import { Marquee } from '../Marquee/Marquee';
import CustomCursorContext from '../CustomCursor/context/CustomCursorContext';

export const Project = ({project}: {project: ProjectProps}) => {

    const refs: React.MutableRefObject<any> = useRef([]);
    const {setType} = useContext(CustomCursorContext);

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        new LoopingElement(refs.current[0], 0, 0.01);
        new LoopingElement(refs.current[1], -100, 0.01);
    }, []);

    const goToProject = () => {
        window.open(project.link, '_blank');
    };

    return (
        <div onClick={() => goToProject()} className={`project-container`}
             onMouseEnter={() => setType('project')}
             onMouseLeave={() => setType('default')}
        >
            <div className={`project-name ${project.className}`} data-scroll data-scroll-speed="1">
                <span data-scroll data-scroll-class="reveal-text" data-scroll-offset="100">{project.name.text}</span>
            </div>
            <div className={`project-info ${project.className}`} data-scroll data-scroll-speed="1.3">
                <span data-scroll data-scroll-class="reveal-text" data-scroll-offset="100">{project.info.text}</span>
            </div>
            <div className={`project-description ${project.className}`} data-scroll
                 data-scroll-speed="1.2">
                <span data-scroll data-scroll-class="reveal-text" data-scroll-offset="100">{project.description.text}</span>
            </div>
            <div className={`project-picture ${project.className}-1`} data-scroll
                 data-scroll-speed="0.5">
                <img
                    className="picture"
                    src={project.imgs[0]}
                    alt="project-picture"
                    style={{transitionDelay: '0.2s'}}
                    data-scroll data-scroll-class="reveal-img" data-scroll-offset="100"
                />
            </div>
            <div className={`project-picture ${project.className}-2`}
                 data-scroll data-scroll-speed="0.5">
                <img
                    className="picture"
                    src={project.imgs[1]}
                    alt="project-picture"
                    style={{transitionDelay: '0.4s'}}
                    data-scroll data-scroll-class="reveal-img" data-scroll-offset="100"
                />
            </div>
            <div className={`project-picture ${project.className}-3`}
                 data-scroll data-scroll-speed="0.5">
                <img
                    className="picture"
                    src={project.imgs[2]}
                    alt="project-picture"
                    style={{transitionDelay: '0.6s'}}
                    data-scroll data-scroll-class="reveal-img" data-scroll-offset="100"
                />
            </div>
            <div className={`marquee-project ${project.className}`}
                 data-scroll data-scroll-speed="1" data-scroll-class="reveal-marquee">
                <Marquee text={project.marquee.text} addRef={addToRefs}/>
            </div>
            <div className="project-link" data-scroll data-scroll-speed="1">
                <span data-scroll data-scroll-class="reveal-text">See project</span>
            </div>
        </div>
    );
};
