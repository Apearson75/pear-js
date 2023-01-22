import DOM from "./lib/DOM";
import { createElement, PearElement } from "./lib/Element";
import { State } from "./lib/State";
declare const Pear: {
    PearElement: typeof PearElement;
    createElement: typeof createElement;
    State: typeof State;
    DOM: typeof DOM;
};
export default Pear;
