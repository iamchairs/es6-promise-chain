export declare function _forLazy(callbacks: Array<() => Promise<any>>): Promise<any[]>;
export declare function _forCallback<T>(callbacks: Array<() => Promise<any>>, resolve: (value?: {} | Thenable<T>) => void, reject: (value?: {} | Thenable<T>) => void, resolution: any, index: number): void;
