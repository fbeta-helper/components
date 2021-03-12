import { FC } from 'react';
export interface ISwitchProps {
    trueText?: string;
    falseText?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}
declare const Switch: FC<ISwitchProps>;
export default Switch;
