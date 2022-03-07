import React from 'react';
export interface ICascaderProps {
    options: any[];
    onChange: (value: any | undefined) => void;
    columnStyle?: any;
    textWidth?: string;
    selected?: any[];
    [key: string]: any;
}
declare const Cascader: React.FC<ICascaderProps>;
export default Cascader;
