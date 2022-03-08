import { FC } from 'react';
import { IBlock } from '../@types';
interface IEBlock extends IBlock {
    onChange?: (value: any) => void;
    activeKey?: string | number | null;
    openKeys?: any[];
    code?: any;
}
declare const Block: FC<IEBlock>;
export default Block;
