import React from 'react';
import { ToastOptions } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
export interface IMessage extends ToastOptions {
    content?: string | React.ReactNode;
    weight?: 'default' | 'primary' | 'bold';
    label?: string;
}
declare class Message {
    info({ weight, label, ...config }: IMessage): React.ReactText;
    warning({ weight, label, ...config }: IMessage): React.ReactText;
    success({ weight, label, ...config }: IMessage): React.ReactText;
    error({ weight, label, ...config }: IMessage): React.ReactText;
}
declare const _default: Message;
export default _default;
