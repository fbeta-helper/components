import { FC } from 'react';
interface ISearchFieldProps {
    placeholder?: string;
    value?: any;
    disabled?: boolean;
    inputDisabled?: boolean;
    onChange?: (e: any) => void;
    centerText?: boolean;
}
declare const SearchField: FC<ISearchFieldProps>;
export default SearchField;
