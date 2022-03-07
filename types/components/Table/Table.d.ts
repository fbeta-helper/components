import { FC, ReactNode } from 'react';
export declare type TTableHeadingStatus = {
    color: string;
    label: string;
    value: number | string;
    isTotal?: boolean;
};
interface textProps {
    inputSearchText?: string;
    hiddenColumnText?: string;
    showAllText?: string;
}
export interface ITableProps {
    loading?: boolean;
    searchValue?: String;
    fetchData: (params: {
        pageSize: number;
        pageIndex: number;
        searchValue: String;
        filters: any;
        sortBy: any;
    }) => void;
    loadingComponent?: ReactNode;
    actions?: ReactNode;
    heading?: ReactNode | TTableHeadingStatus[];
    forceUpdate?: any;
    options: any;
    textSortTable?: textProps;
    isFixedRowHeight?: boolean;
    hoverable?: boolean;
    emptyData?: string | ReactNode;
    scrollX?: string;
    scrollY?: string;
    isStriped?: boolean;
}
declare const Table: FC<ITableProps>;
export default Table;
