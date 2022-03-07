import { FC, HTMLAttributes, ReactNode } from 'react';
export interface ISlider extends HTMLAttributes<HTMLDivElement> {
    value: [number, number] | number;
    showTooltip?: boolean;
    marks?: any;
    bgColor?: string;
    style?: object;
    tipFormatter?: (val: any) => null | ReactNode;
}
declare const Slider: FC<ISlider>;
export default Slider;
