export default class $ {
    dom = null;
    data={}
    constructor(element) {
        this.dom = document.createElement(element);
    }
    parent(selector){
        document.querySelector(selector).appendChild(this.dom);
        return this;
    }
    addChild(child) {
        this.dom.appendChild(child);
        return this;
    }
    remove(){
        this.dom.remove();
        return this;
    }
    addClass(className) {
        this.dom.classList.add(className);
        return this;
    }
    removeClass(className) {
        this.dom.classList.remove(className);
        return this;
    }
    toggleClass(className) {
        this.dom.classList.toggle(className);
        return this;
    }
    addEvent(event, callback) {
        this.dom.addEventListener(event, callback);
        return this;
    }
    getValue() {
        return this.dom.value;
    }
    setText(text) {
        this.dom.textContent = text;
        return this;
    }
    setAttribute(name, value) {
        this.dom.setAttribute(name, value);
        return this;
    }
    static fromDOM(selector) {
        const element = document.querySelector(selector);
        const output = new $();
        output.dom = element;
        return output;
    }
}

export class Button extends $ {
    constructor() {
        super("button");
    }
    text(text) {
        this.dom.textContent = text;
        return this;
    }
}

export class Input extends $ {
    constructor() {
        super("input");
    }
    placeholder(text) {
        this.dom.setAttribute("placeholder", text);
        return this;
    }
}
export class IconButton extends $ {}
export class Text extends $ {}