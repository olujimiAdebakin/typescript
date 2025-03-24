class projectInput {

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        // import template content

        const importedHTMLElement = document.importNode(this.templateElement.content, true);
          this.element = importedHTMLElement.firstElementChild as HTMLFormElement;
this.attach();
}
    
  
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}