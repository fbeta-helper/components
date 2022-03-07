import { FC, HTMLAttributes } from 'react';
export interface IContainer extends HTMLAttributes<HTMLDivElement> {
    span?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' | '';
}
declare const Container: FC<IContainer>;
export default Container;
