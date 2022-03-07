import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import { ISelectedDisplay } from './@types';
export declare type TInputValidateStatus = 'success' | 'error' | 'warning' | '';
export interface ISelectProps {
    centerText?: boolean;
    data: any;
    onChange?: (item: any) => void;
    onSearch?: (searchText: string, item: any) => void;
    contentStyle?: CSSProperties;
    listStyle?: CSSProperties;
    itemStyle?: CSSProperties;
    listExtra?: React.ReactNode;
    ghost?: boolean;
    customResultRender?: string | React.ReactNode;
    selectedDisplay?: ISelectedDisplay[] | ISelectedDisplay;
    checkbox?: boolean;
    multiple?: boolean;
    closeOnSelect?: boolean;
    defaultNumItem?: number;
    loading?: boolean;
    renderItem?: (item: any) => React.ReactNode;
    valueKey?: string;
    labelKey?: string;
    value?: any | any[];
    searchable?: boolean;
    disabled?: boolean;
    showAvatar?: boolean;
    showDescription?: boolean;
    onQuickCreate?: () => void;
    quickCreateContent?: React.ReactNode | string;
    quickCreate?: boolean;
    suffix?: React.ReactNode;
    style?: CSSProperties;
    label?: string;
    help?: string;
    required?: boolean;
    validateStatus?: TInputValidateStatus;
    placeholder?: string;
    mode?: 'tags';
    customClassName?: (item: any, index: number) => string;
}
export interface ISelectOptionProps extends HTMLAttributes<HTMLDivElement> {
    item: any;
    showAvatar?: boolean;
    showDescription?: boolean;
    labelKey?: string;
    isSelected?: boolean;
    selectedDisplay?: ISelectedDisplay[] | ISelectedDisplay;
    checkbox?: boolean;
    onCheckboxChange?: (value: any) => void;
}
declare const Select: FC<ISelectProps>;
export default Select;
