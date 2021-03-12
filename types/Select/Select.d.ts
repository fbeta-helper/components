import { CSSProperties, FC, HTMLAttributes } from 'react';
export declare type TInputValidateStatus = 'success' | 'error' | 'warning' | '';
export interface ISelectProps {
    data: any;
    onChange?: (item: any) => void;
    onSearch?: (searchText: string, item: any) => void;
    defaultNumItem?: number;
    loading?: boolean;
    renderItem?: (item: any) => React.ReactNode;
    valueKey?: string;
    labelKey?: string;
    value?: any | any[];
    searchable?: boolean;
    showAvatar?: boolean;
    showDescription?: boolean;
    style?: CSSProperties;
    label?: string;
    help?: string;
    required?: boolean;
    validateStatus?: TInputValidateStatus;
}
export interface ISelectOptionProps extends HTMLAttributes<HTMLDivElement> {
    item: any;
    showAvatar?: boolean;
    showDescription?: boolean;
    labelKey?: string;
}
declare const Select: FC<ISelectProps>;
export default Select;
