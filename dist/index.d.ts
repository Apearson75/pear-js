import DOM from "./lib/DOM.js";
import { createElement, PearElement } from "./lib/Element.js";
import { State } from "./lib/State.js";
declare const Pear: {
    PearElement: typeof PearElement;
    createElement: typeof createElement;
    State: typeof State;
    DOM: typeof DOM;
};
export default Pear;
