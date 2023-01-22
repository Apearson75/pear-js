export declare function useState(initVal: any): any[];
export declare class State {
    prevVal: any;
    val: any;
    constructor(initVal: any);
    setState(newVal: any): void;
}
