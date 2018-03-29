export class TagInput {
    render() {
        return (h("input", { type: "text", class: "form-control", placeholder: this.placeholder }));
    }
    static get is() { return "tag-input"; }
    static get properties() { return { "disabled": { "type": Boolean, "attr": "disabled" }, "placeholder": { "type": String, "attr": "placeholder" } }; }
    static get style() { return "/**style-placeholder:tag-input:**/"; }
}
