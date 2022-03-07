import { FC } from 'react';
declare type TLineType = 'solid' | 'dashed';
declare type TAlign = 'center' | 'left' | 'right';
export interface ISeparator {
    className?: string;
    type?: TLineType;
    text?: string;
    color?: string;
    width?: string | number;
    textAlign?: TAlign;
    space?: string;
}
declare const Separator: FC<ISeparator>;
export default Separator;
