import { MutableRefObject } from 'react';
export default function useFilterPopup(targetDOM: MutableRefObject<HTMLElement | null>): {
    style: {};
    open: boolean;
    toggle: () => void;
};
