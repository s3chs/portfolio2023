import { useEffect, useRef } from 'react';
import { LoopingElement } from '../Marquee/LoopingElement';
import { ProjectProps } from '../Projects/data';
import { Marquee } from '../Marquee/Marquee';

export const Project = ({project}: {project: ProjectProps}) => {

        const refs: React.MutableRefObject<any> = useRef([]);

        const addToRefs = (el: HTMLDivElement) => {
            if (el && !refs.current.includes(el)) {
                refs.current.push(el);
            }
        };

        useEffect(() => {
            new LoopingElement(refs.current[0], 0, 0.01);
            new LoopingElement(refs.current[1], -100, 0.01);
        }, []);

        return (
            <div className="project-container">
                <div className="project-name" style={{gridArea: project.name.position}} data-scroll data-scroll-speed="1.7">
                    <span data-scroll data-scroll-class="reveal-text" data-scroll-offset="100">{project.name.text}</span>
                </div>
                <div className="project-info" style={{gridArea: project.info.position}} data-scroll data-scroll-speed="0.8">
                    <span data-scroll data-scroll-class="reveal-text" data-scroll-offset="100">{project.info.text}</span>
                </div>
                <div className="project-description" style={{gridArea: project.description.position}} data-scroll data-scroll-speed="0.5">
                    <span data-scroll data-scroll-class="reveal-text" data-scroll-offset="100">{project.description.text}</span>
                </div>
                <div className={`project-picture ${project.className}`} style={{gridArea: project.imgsPosition[0]}} data-scroll
                     data-scroll-speed="1">
                    <img
                        className="picture"
                        src={project.imgs[0]}
                        alt="project-picture"
                        style={{transitionDelay: '0.2s'}}
                        data-scroll data-scroll-class="reveal-img" data-scroll-offset="100"
                    />
                </div>
                <div className={`project-picture ${project.className}`} style={{gridArea: project.imgsPosition[1]}}
                     data-scroll data-scroll-speed="1">
                    <img
                        className="picture"
                        src={project.imgs[1]}
                        alt="project-picture"
                        style={{transitionDelay: '0.4s'}}
                        data-scroll data-scroll-class="reveal-img" data-scroll-offset="100"
                    />
                </div>
                <div className={`project-picture ${project.className}`} style={{gridArea: project.imgsPosition[2]}}
                     data-scroll data-scroll-speed="1">
                    <img
                        className="picture"
                        src={project.imgs[2]}
                        alt="project-picture"
                        style={{transitionDelay: '0.6s'}}
                        data-scroll data-scroll-class="reveal-img" data-scroll-offset="100"
                    />
                </div>
                <div className="marquee" style={{gridArea: project.marquee.position}}
                     data-scroll data-scroll-speed="2" data-scroll-class="reveal-marquee">
                    <Marquee text={project.marquee.text} addRef={addToRefs}/>
                </div>
            </div>
        );
    }
;
