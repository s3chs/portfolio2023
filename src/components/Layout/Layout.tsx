import { ReactNode, useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export const Layout = ({children}: {children: ReactNode}) => {

    const containerRef = useRef<any>(null);

    useEffect(() => {
        setTimeout(() => {
            containerRef.current.style.overflow = 'auto';
            containerRef.current.style.height = '100%';
        }, 4000);
    }, []);

    return (
        <LocomotiveScrollProvider options={{
            smooth: true,
            mobile: {
                smooth: true,
            },
            tablet: {
                smooth: true,
            },
            smartphone: {
                smooth: true,
            },
            scrollFromAnywhere: true,
        }}
                                  containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef} className="layout-container">
                {children}
            </main>
        </LocomotiveScrollProvider>
    );
};
