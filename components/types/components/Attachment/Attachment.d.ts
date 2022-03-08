import { FC, HTMLAttributes } from 'react';
export interface IAttachment extends HTMLAttributes<HTMLDivElement> {
    file: any;
    className?: string;
    showAction?: boolean;
    iconSize?: number;
    onRemove?: () => void;
    style?: object;
}
declare const Attachment: FC<IAttachment>;
export default Attachment;
