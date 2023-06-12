import { ReactNode, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export const Layout = ({children}: {children: ReactNode}) => {
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider options={{smooth: true}}>
            <div data-scroll-container ref={containerRef} className="layout-container">
                {children}
            </div>
        </LocomotiveScrollProvider>
    );
};
