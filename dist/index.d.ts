declare function createElement(tag: string, props: {}, ...children: any[]): PearElement;
declare class PearElement {
    tag: string;
    props: {};
    children: any[];
    constructor(tag: string, props: {}, ...children: any[]);
    get element(): HTMLElement;
}
declare const Pear: {
    PearElement: typeof PearElement;
    createElement: typeof createElement;
};
export default Pear;
