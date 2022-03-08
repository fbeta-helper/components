import { CSSProperties } from 'react';
import { IBlock } from './@types';
export interface ISidebarProps {
    data?: IBlock[];
    activeKey?: any;
    loadingKeys?: any[];
    openKeys?: any[];
    style?: CSSProperties;
    onChange?: (value: any) => void;
}
declare const _default: import("react").NamedExoticComponent<ISidebarProps>;
export default _default;
