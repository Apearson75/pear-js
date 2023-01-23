import DOM from "./DOM.js";
import { State } from "./State.js";

export function createElement(tag: string, props: {}, ...children: any[]) {
    return new PearElement(tag, props, children);
}

export class PearElement {
    tag: string;
    props: {};
    children: any[];

    constructor(tag: string, props: {}, ...children: any[]) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }

    get element() {
        const elem = document.createElement(this.tag);
        if (this.props !== null) {
            Object.keys(this.props).forEach(prop => {
                if (this.props[prop] instanceof State) {
                    this.props[prop].bindedElements.push({[prop]: elem});
                    elem[prop] = this.props[prop].val;
                } else
                    elem[prop] = this.props[prop];
            });
        }    
        this.children[0].forEach(child => {
            if (typeof child === "string") {
                elem.innerHTML += child;
            } else if (child instanceof PearElement) {
                elem.appendChild(child.element);
            } else if (child instanceof State) {
                child.bindedElements.push({inner: elem});
                elem.innerHTML += child.val;
            }
        });
        return elem;
    }
};