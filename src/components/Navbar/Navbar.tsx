import { useContext, useEffect } from 'react';
import { useRef } from 'react';
import CustomCursorContext from '../CustomCursor/context/CustomCursorContext';

export const Navbar = () => {
    const refs: any = useRef([]);
    const {setType} = useContext(CustomCursorContext);

    const addToRefs = (el: HTMLAnchorElement) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        refs.current.forEach((element: any) => {
            let innerText = element.innerText;
            element.innerHTML = '';

            let textContainer = document.createElement('div');
            textContainer.classList.add('block');

            for (let letter of innerText) {
                let span = document.createElement('span');
                span.innerText = letter.trim() === '' ? '\xa0' : letter;
                span.classList.add('letter');
                textContainer.appendChild(span);
            }

            element.appendChild(textContainer);
            element.appendChild(textContainer.cloneNode(true));
        });

        refs.current.forEach((element: HTMLAnchorElement) => {
            element.addEventListener('mouseover', () => {
                element.classList.remove('play');
            });
        });

        return () => {
            refs.current.forEach((element: HTMLAnchorElement) => {
                element.removeEventListener('mouseover', () => {
                    element.classList.remove('play');
                });
            });
            refs.current = [];
        };
    }, []);

    return (
        <div className="navbar-container">
            <p
                className="initials"
                onMouseEnter={() => setType('link')}
                onMouseLeave={() => setType('default')}
            >
                pb.
            </p>
            <div className="navbar-links-container">
                <a
                    ref={addToRefs} className="nav-text"
                    onMouseEnter={() => setType('link')}
                    onMouseLeave={() => setType('default')}
                >
                    about
                </a>
                <a
                    ref={addToRefs} className="nav-text"
                    onMouseEnter={() => setType('link')}
                    onMouseLeave={() => setType('default')}
                >
                    projects
                </a>
                <a
                    ref={addToRefs} className="nav-text"
                    onMouseEnter={() => setType('link')}
                    onMouseLeave={() => setType('default')}
                >
                    contact
                </a>
            </div>
        </div>
    );
};
