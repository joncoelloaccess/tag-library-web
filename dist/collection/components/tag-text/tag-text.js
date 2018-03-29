// enum Typeography {
//   h1 = "h1",
//   h2 = "h2",
//   h3 = "h3",
//   h4 = "h4",
//   h5 = "h5",
//   feature = "feature",
//   small = "small",
//   min = "min"
// }
const getTextType = type => {
    switch (type) {
        case "h1":
            return (h("h1", null,
                h("slot", null)));
        case "h2":
            return (h("h2", null,
                h("slot", null)));
        case "h3":
            return (h("h3", null,
                h("slot", null)));
        case "h4":
            return (h("h4", null,
                h("slot", null)));
        case "h5":
            return (h("h5", null,
                h("slot", null)));
        case "small":
            return (h("small", null,
                h("slot", null)));
        default:
            return (h("p", null,
                h("slot", null)));
    }
};
export class TagText {
    render() {
        const { inline, type } = this;
        return inline ? h("slot", null) : getTextType(type);
    }
    static get is() { return "tag-text"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "inline": { "type": Boolean, "attr": "inline" }, "type": { "type": String, "attr": "type" } }; }
    static get style() { return "/**style-placeholder:tag-text:**/"; }
}
