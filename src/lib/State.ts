import DOM from "./DOM.js";
import { PearElement } from "./Element.js";

export function useState(initVal) {
    const state = new State(initVal);
    return [state.val, state.setState];
}

export class State {
    prevVal: any;
    val: any;
    bindedElements: {}[] = [];

    constructor(initVal: any) {
        this.val = initVal;
        this.prevVal = this.val;
    }

    setState(newVal: any) {
        this.prevVal = this.val;
        this.val = newVal;
        this.bindedElements.forEach(elem => {
            Object.keys(elem).forEach(elemKey => {
                if (elemKey === 'inner') {
                    elem[elemKey].innerHTML = this.val
                } else {
                    elem[elemKey][elemKey] = this.val;
                }
            });
        });
        // DOM.rerender();
    }
}