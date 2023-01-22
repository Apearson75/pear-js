"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.useState = void 0;
const DOM_1 = __importDefault(require("./DOM"));
function useState(initVal) {
    const state = new State(initVal);
    return [state.val, state.setState];
}
exports.useState = useState;
class State {
    prevVal;
    val;
    constructor(initVal) {
        this.val = initVal;
        this.prevVal = this.val;
    }
    setState(newVal) {
        this.prevVal = this.val;
        this.val = newVal;
        DOM_1.default.rerender();
    }
}
exports.State = State;
