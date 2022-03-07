import { FC, ReactNode } from 'react';
export declare type TTableHeadingStatus = {
    color: string;
    label: string;
    value: number | string;
    isTotal?: boolean;
};
export interface ITableProps {
    loading?: boolean;
    fetchData: (params: {
        pageSize: number;
        pageIndex: number;
        filters: any;
    }) => void;
    loadingComponent?: ReactNode;
    actions?: ReactNode;
    heading?: ReactNode | TTableHeadingStatus[];
    forceUpdate?: any;
    options: any;
    isFixedRowHeight?: boolean;
    hoverable?: boolean;
}
declare const Table: FC<ITableProps>;
export default Table;
