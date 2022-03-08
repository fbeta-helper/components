import { FC } from 'react';
export interface ICheckboxProps {
    checked?: boolean;
    text: string;
    disabled?: boolean;
    invalid?: boolean;
}
declare const Checkbox: FC<ICheckboxProps>;
export default Checkbox;
