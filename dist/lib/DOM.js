export default class DOM {
    static element;
    static path;
    static append(element) {
        document.body.append(element.element);
    }
    ;
    static rerender() {
        const dom = document.querySelector(DOM.path);
        dom.replaceChildren(this.element.element);
    }
    static render(path, element) {
        DOM.path = path;
        DOM.element = element;
        window.addEventListener('load', function () {
            document.querySelector(path).append(element.element);
        });
    }
    ;
}
