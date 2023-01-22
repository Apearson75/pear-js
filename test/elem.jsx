import Pear from "../src";

function add() {
    countState.setState(countState.val + 1);
}
function minus() {
    countState.setState(countState.val - 1);
}

const countState = new Pear.State(0);

const elem =
    <div>
        <h1>Hello World</h1>
        <p>{countState}</p>

        <button onclick={add}>+</button>
        <button onclick={minus}>-</button>
        <p>Created With PearJS</p>
    </div>

export default elem;