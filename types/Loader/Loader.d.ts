import { CSSProperties, FC, HTMLAttributes } from 'react';
export interface ILoader extends HTMLAttributes<HTMLDivElement> {
    color?: string;
    styles?: CSSProperties;
}
declare const Loader: FC<ILoader>;
export default Loader;
