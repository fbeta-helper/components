import { CSSProperties, FC } from 'react';
export interface IRadioProps {
    checked?: any;
    onChange?: (value: any) => void;
    text?: string | React.ReactNode;
    value?: any;
    style?: CSSProperties;
    disabled?: boolean;
    invalid?: boolean;
    name?: string;
}
declare const Radio: FC<IRadioProps>;
export default Radio;
