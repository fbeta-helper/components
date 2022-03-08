import { FC, HTMLAttributes } from 'react';
export declare type TSkeletonParagraph = {
    rows: number;
};
export interface ISkeletonProps extends HTMLAttributes<HTMLDListElement> {
    size?: 'small' | 'medium' | 'large';
    paragraph?: TSkeletonParagraph | null;
    width?: number | string;
    height?: number | string;
    rounded?: boolean;
}
declare const Skeleton: FC<ISkeletonProps>;
export default Skeleton;
