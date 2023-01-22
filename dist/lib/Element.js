"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PearElement = exports.createElement = void 0;
const State_1 = require("./State");
function createElement(tag, props, ...children) {
    return new PearElement(tag, props, children);
}
exports.createElement = createElement;
class PearElement {
    tag;
    props;
    children;
    constructor(tag, props, ...children) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }
    get element() {
        const elem = document.createElement(this.tag);
        if (this.props !== null) {
            Object.keys(this.props).forEach(prop => {
                elem[prop] = this.props[prop];
            });
        }
        this.children[0].forEach(child => {
            if (typeof child === "string") {
                elem.innerHTML += child;
            }
            else if (child instanceof PearElement) {
                elem.appendChild(child.element);
            }
            else if (child instanceof State_1.State) {
                elem.innerHTML += child.val;
            }
        });
        return elem;
    }
}
exports.PearElement = PearElement;
;
