import { FC } from 'react';
export declare type TGroupValidateStatus = 'success' | 'error' | 'warning' | '';
interface IContext {
    value?: any;
    disabled?: boolean;
    name?: string;
    onChange?: (value: any) => void;
}
export interface IGroup {
    children?: JSX.Element | JSX.Element[];
    label?: string;
    onChange?: (value: any) => void;
    value?: any;
    help?: string;
    required?: boolean;
    disabled?: boolean;
    validateStatus?: TGroupValidateStatus;
}
export declare const RadioContext: import("react").Context<IContext>;
declare const Group: FC<IGroup>;
export default Group;
