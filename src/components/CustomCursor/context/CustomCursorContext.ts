import { createContext } from 'react';

export type CursorLookType =
    | 'slider-hover'
    | 'slider-drag'
    | 'text'
    | 'square'
    | 'link'
    | 'default';
export type CustomCursorType = {
    type: CursorLookType;
    setType: (type: CursorLookType) => void;
};

const CustomCursorContext = createContext<CustomCursorType>({
    type: 'default',
    setType: () => {
    },
});

export default CustomCursorContext;
