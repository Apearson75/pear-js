export function useState(initVal) {
    const state = new State(initVal);
    return [state.val, state.setState];
}
export class State {
    prevVal;
    val;
    bindedElements = [];
    constructor(initVal) {
        this.val = initVal;
        this.prevVal = this.val;
    }
    setState(newVal) {
        this.prevVal = this.val;
        this.val = newVal;
        this.bindedElements.forEach(elem => {
            Object.keys(elem).forEach(elemKey => {
                if (elemKey === 'inner') {
                    elem[elemKey].innerHTML = this.val;
                }
                else {
                    elem[elemKey][elemKey] = this.val;
                }
            });
        });
        // DOM.rerender();
    }
}
