import { FC, CSSProperties } from 'react';
interface ITarget {
    label: string;
    email: boolean;
    system: boolean;
    type: string;
}
interface IInputData {
    title: string;
    type: string;
    target: ITarget[];
    reminder: {
        beforeOutDate: string;
        timeOutDate: {
            hour: Number;
            minute: Number;
        };
        loop: {
            active: boolean;
            rangeDate: string;
            rangeDateNumber: number;
        };
    };
}
interface textProps {
    warningStatus?: string;
    incomingNoti?: string;
    emailAddress?: string;
    system?: string;
    hourLoop?: string;
    dayLoop?: string;
    timeLoop?: string;
    placeholderTimeSend?: string;
}
export interface INotificationSetting {
    loopTime: any[];
    style: CSSProperties;
    errors?: any;
    data: any;
    textSetting?: textProps;
    editable?: boolean;
    onChange?: (data: {
        target?: ITarget | IInputData | Number;
        clicked?: 'email' | 'system' | string;
        columnIndex?: Number;
        rowIndex?: Number;
        type?: string | Number;
        value?: any;
    }) => void;
}
declare const NotificationSetting: FC<INotificationSetting>;
export default NotificationSetting;
