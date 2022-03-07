/// <reference types="react" />
export interface IBlock {
    searchable?: boolean;
    searchContent?: React.ReactNode;
    key?: string | number | null;
    defaultNumItem?: number;
    divider?: boolean;
    icon?: React.ReactNode;
    loading?: boolean;
    items?: IBlock[];
    isHeader?: boolean;
    extra?: React.ReactNode;
    viewMore?: boolean;
    viewMoreAction?: () => void;
    viewMoreText?: string;
    renderItem?: () => React.ReactNode;
    label?: string | React.ReactNode;
    disabled?: boolean;
}
