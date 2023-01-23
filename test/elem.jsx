import Pear from "../src";

function add() {
    countState.setState(countState.val + 1);
}
function minus() {
    countState.setState(countState.val - 1);
}
function changeColor() {
    colorState.setState("color: green");
}

const countState = new Pear.State(0);
const colorState = new Pear.State("color: red");

const elem = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>{countState}</p>

            <button onclick={add}>+</button>
            <button onclick={minus}>-</button>

            <p style={colorState}>ABC</p>
            <button onclick={changeColor}>Change Color</button>

            <p>Created With PearJS</p>
        </div>
    );
}

export default elem;