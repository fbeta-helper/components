import { FC, ReactNode, HTMLAttributes } from 'react';
export declare type TButtonVariant = 'primary' | 'secondary' | 'default' | 'dashed' | 'danger' | 'link';
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLLinkElement> {
    block?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    loading?: boolean;
    size?: 'small' | 'medium' | 'large';
    target?: string;
    variant?: TButtonVariant;
    children?: ReactNode;
}
declare const Button: FC<IButtonProps>;
export default Button;
