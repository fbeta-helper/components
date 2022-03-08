import { FC, HTMLAttributes } from 'react';
export interface ICalendar extends HTMLAttributes<HTMLDivElement> {
    width?: number | string;
    className?: string;
    style?: object;
    onChangeDate?: (date: any) => void;
}
declare const Calendar: FC<ICalendar>;
export default Calendar;
