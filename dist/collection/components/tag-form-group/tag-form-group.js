export class TagFormGroup {
    render() {
        const { label, placeholder, value } = this;
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: "exampleInputEmail1" },
                h("tag-text", { type: "h5" }, label)),
            h("input", { type: "text", class: "form-control", id: "exampleInputEmail1", placeholder: placeholder, value: value })));
    }
    static get is() { return "tag-form-group"; }
    static get properties() { return { "label": { "type": String, "attr": "label" }, "placeholder": { "type": String, "attr": "placeholder" }, "value": { "type": String, "attr": "value" } }; }
    static get style() { return "/**style-placeholder:tag-form-group:**/"; }
}
