import DOM from "./DOM";

export function useState(initVal) {
    const state = new State(initVal);
    return [state.val, state.setState];
}

export class State {
    prevVal: any;
    val: any;
    constructor(initVal: any) {
        this.val = initVal;
        this.prevVal = this.val;
    }

    setState(newVal: any) {
        this.prevVal = this.val;
        this.val = newVal;
        DOM.rerender();
    }
}