export class TagFormGroupSelect {
    render() {
        const { label } = this;
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: "exampleInputEmail1" },
                h("tag-text", { type: "h5" }, label)),
            h("select", { class: "custom-select" },
                h("option", null, "Just one"))));
    }
    static get is() { return "tag-form-group-select"; }
    static get properties() { return { "label": { "type": String, "attr": "label" } }; }
    static get style() { return "/**style-placeholder:tag-form-group-select:**/"; }
}
