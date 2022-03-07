import { FC, HTMLAttributes } from 'react';
export interface IDropdown extends HTMLAttributes<HTMLDivElement> {
    data: any[];
    labelKey?: string;
    className?: string;
    style?: object;
}
declare const Dropdown: FC<IDropdown>;
export default Dropdown;
