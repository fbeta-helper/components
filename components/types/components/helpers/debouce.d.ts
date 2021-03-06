/**
 * A function that emits a side effect and does not return anything.
 */
export declare type Procedure = (...args: any[]) => void;
export declare type Options = {
    isImmediate: boolean;
};
export interface DebouncedFunction<F extends Procedure> {
    (this: ThisParameterType<F>, ...args: Parameters<F>): void;
    cancel: () => void;
}
export declare function debounce<F extends Procedure>(func: F, waitMilliseconds?: number, options?: Options): DebouncedFunction<F>;
