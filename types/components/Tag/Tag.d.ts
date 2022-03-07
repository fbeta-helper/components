import React, { CSSProperties, FC } from 'react';
export interface ITagProps {
    removable?: boolean;
    removeIcon?: React.ReactNode;
    add?: boolean;
    addText?: string;
    onAdd?: (value: string) => void;
    onRemove?: () => void;
    label?: string;
    style?: CSSProperties;
    background?: string;
    color?: string;
    variant?: 'default' | 'primary' | 'success' | 'fail' | 'warning';
    weight?: 'subtle' | 'bold';
    type?: 'normal' | 'user';
    className?: string;
}
declare const Tag: FC<ITagProps>;
export default Tag;
