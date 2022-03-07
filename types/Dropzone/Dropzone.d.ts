import { DragEvent, CSSProperties } from 'react';
export interface IDropzoneProps {
    multiple?: boolean;
    disabled?: boolean;
    loading?: boolean;
    icon?: any;
    text?: string;
    onDragEnter?: (e: DragEvent<HTMLDivElement>) => void;
    onDragLeave?: (e: DragEvent<HTMLDivElement>) => void;
    onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
    onDrop?: (e: DragEvent<HTMLDivElement>) => void;
    onChange?: (files: File[] | null) => void;
    accept?: string;
    showAccept?: boolean;
    maxSize?: string;
    showMaxSize?: boolean;
    className?: string;
    style?: CSSProperties;
    service?: string;
}
declare const _default: import("react").NamedExoticComponent<IDropzoneProps>;
export default _default;
