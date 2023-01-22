# Pear JS

## Javascript Element

```jsx
import Pear from "js-pear";

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
```

---

## Render Element

```js
import Pear from "js-pear";
import element from "./elem";

console.log("Built with Pear");
Pear.DOM.render("#app", element);
```