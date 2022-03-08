import { FC, HTMLAttributes } from 'react';
export interface IProgress extends HTMLAttributes<HTMLDivElement> {
    percent?: number;
    bgColor?: string;
    color?: string;
    type?: 'line' | 'circle' | 'dashboard';
    style?: object;
}
declare const Progress: FC<IProgress>;
export default Progress;
