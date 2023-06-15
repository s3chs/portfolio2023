import { ReactNode, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export const Layout = ({children}: {children: ReactNode}) => {
    const containerRef = useRef(null);
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
