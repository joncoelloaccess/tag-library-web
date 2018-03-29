export class TagBadge {
    render() {
        return h("span", null, this.value);
    }
    static get is() { return "tag-badge"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" }, "value": { "type": String, "attr": "value" } }; }
    static get style() { return "/**style-placeholder:tag-badge:**/"; }
}
