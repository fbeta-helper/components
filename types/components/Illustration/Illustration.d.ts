import { CSSProperties } from 'react';
interface IIcon {
    name: string;
    content: React.ReactNode;
}
export interface IIllustrationProps {
    colorData?: string[];
    iconData: IIcon[];
    checkIcon?: React.ReactNode;
    colorValue?: string;
    iconValue?: string;
    onChangeColor?: (value: any) => void;
    onChangeIcon?: (value: any) => void;
    label?: string;
    required?: boolean;
    style?: CSSProperties;
    error?: boolean;
    errorMessage?: string;
}
declare const _default: import("react").NamedExoticComponent<IIllustrationProps>;
export default _default;
