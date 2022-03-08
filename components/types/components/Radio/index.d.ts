/// <reference types="react" />
import { IRadioProps } from './Radio';
import Group from '../Group/Group';
interface CompoundedComponent extends React.ForwardRefExoticComponent<IRadioProps & React.RefAttributes<HTMLElement>> {
    Group: typeof Group;
}
declare const Radio: CompoundedComponent;
export type { IRadioProps };
export default Radio;
