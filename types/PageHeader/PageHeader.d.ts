import { FC, ReactNode } from 'react';
export interface ITabData {
    id: string | number;
    label: string;
}
export interface IPageHeaderProps {
    title: string | ReactNode;
    actions?: ReactNode;
    extra?: ReactNode;
    icon?: ReactNode;
    description?: ReactNode;
    tabs?: ITabData[];
    tabIndex?: string | number;
    onTabChange?: (id: string | number) => void;
}
declare const PageHeader: FC<IPageHeaderProps>;
export default PageHeader;
