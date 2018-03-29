export class TagInputGroup {
    render() {
        return (h("div", { class: "input-group" },
            h("slot", { name: "prefix" }),
            h("tag-input", null),
            h("slot", { name: "suffix" })));
    }
    static get is() { return "tag-input-group"; }
    static get style() { return "/**style-placeholder:tag-input-group:**/"; }
}
