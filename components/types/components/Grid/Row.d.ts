import { FC, HTMLAttributes } from 'react';
export interface IRow extends HTMLAttributes<HTMLDivElement> {
    gutters?: [number | string] | [number | string, number | string];
}
declare const Row: FC<IRow>;
export default Row;
