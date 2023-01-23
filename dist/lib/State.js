import DOM from "./DOM";
export function useState(initVal) {
    const state = new State(initVal);
    return [state.val, state.setState];
}
export class State {
    prevVal;
    val;
    constructor(initVal) {
        this.val = initVal;
        this.prevVal = this.val;
    }
    setState(newVal) {
        this.prevVal = this.val;
        this.val = newVal;
        DOM.rerender();
    }
}
