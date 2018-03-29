export class TagCardHeader {
    render() {
        return (h("tag-card", null,
            h("tag-text", { type: "h4" }, this.heading),
            h("hr", null),
            h("slot", null)));
    }
    static get is() { return "tag-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "heading": { "type": String, "attr": "heading" } }; }
    static get style() { return "/**style-placeholder:tag-card-header:**/"; }
}
