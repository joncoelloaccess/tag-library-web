export class TagInputCheckbox {
    toggleChecked() {
        const { checked } = this;
        this.checked = !checked;
    }
    render() {
        const { checked, label } = this;
        return (h("span", { onClick: () => this.toggleChecked() },
            h("input", { type: "checkbox", id: "exampleCheckbox", name: "check", checked: checked }),
            h("label", { htmlfor: "exampleCheckbox", class: "caption" }, label)));
    }
    static get is() { return "tag-input-checkbox"; }
    static get properties() { return { "checked": { "type": Boolean, "attr": "checked" }, "label": { "type": String, "attr": "label" } }; }
    static get style() { return "/**style-placeholder:tag-input-checkbox:**/"; }
}
