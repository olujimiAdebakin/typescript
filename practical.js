"use strict";
class projectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        // import template content
        const importedHTMLElement = document.importNode(this.templateElement.content, true);
        this.element = importedHTMLElement.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
