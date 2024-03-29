import { useState } from 'react';
import CustomCursorContext, { CursorLookType } from './CustomCursorContext';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const CustomCursorManager = ({children}: Props) => {
    const [type, setType] = useState<CursorLookType>('default');

    return (
        <CustomCursorContext.Provider value={{type, setType}}>
            {children}
        </CustomCursorContext.Provider>
    );
};

export default CustomCursorManager;
