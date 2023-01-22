"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOM_1 = __importDefault(require("./lib/DOM"));
const Element_1 = require("./lib/Element");
const State_1 = require("./lib/State");
const Pear = {
    PearElement: Element_1.PearElement,
    createElement: Element_1.createElement,
    State: State_1.State,
    DOM: DOM_1.default
};
exports.default = Pear;
