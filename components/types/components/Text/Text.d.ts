import { FC } from 'react';
import { ReactNode, HTMLAttributes } from 'react';
export declare type TTextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'important' | 'paragraph' | 'caption' | 'sub1' | 'sub2' | 'link';
export interface ITextProps extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement | HTMLLinkElement> {
    variant?: TTextVariant;
    children: ReactNode;
    href?: string;
}
declare const Text: FC<ITextProps>;
export default Text;
