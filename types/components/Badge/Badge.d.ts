import { CSSProperties, FC } from 'react';
export interface IBadgeProps {
    color?: string;
    size?: 'default' | 'small' | 'medium' | 'large';
    status?: 'success' | 'processing' | 'default' | 'error' | 'warning';
    count?: number;
    max?: number;
    style?: CSSProperties;
}
declare const Badge: FC<IBadgeProps>;
export default Badge;
