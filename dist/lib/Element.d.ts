export declare function createElement(tag: string, props: {}, ...children: any[]): PearElement;
export declare class PearElement {
    tag: string;
    props: {};
    children: any[];
    constructor(tag: string, props: {}, ...children: any[]);
    get element(): HTMLElement;
}
