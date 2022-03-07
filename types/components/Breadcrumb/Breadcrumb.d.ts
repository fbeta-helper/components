import React, { FC } from 'react';
interface IItem {
    name: string;
    link: string;
}
export interface IBreadcrumbProps {
    items: IItem[];
    separator?: string | React.ReactNode;
    maxWidthItem?: string;
    service?: 'springboard' | 'work' | 'booking';
    truncate?: boolean;
    onClick?: (link: String) => void;
    itemStyle?: object;
}
declare const Breadcrumb: FC<IBreadcrumbProps>;
export default Breadcrumb;
