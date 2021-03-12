import { FC, HTMLAttributes } from 'react';
export interface ICol extends HTMLAttributes<HTMLDivElement> {
    span?: number | string;
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
    xxl?: number | string;
}
declare const Col: FC<ICol>;
export default Col;
