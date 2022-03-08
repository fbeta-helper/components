import { FC } from 'react';
export interface IAvatarProps {
    variant?: 'xs' | 'sm' | 'md' | 'lg' | 'llg' | 'xl';
    users?: any | any[];
    presentName?: string;
    presentUsername?: string;
    presentAvatar?: string;
    showInfo?: boolean;
    max?: number;
    styles?: object;
}
declare const Avatar: FC<IAvatarProps>;
export default Avatar;
