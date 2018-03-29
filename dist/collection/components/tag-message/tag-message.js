export class TagMessage {
    render() {
        const props = {};
        const { accent } = this;
        if (accent) {
            props.class = this.accent ? `aside-${this.accent.toLowerCase()}` : "";
        }
        return (h("aside", Object.assign({}, props),
            h("slot", null)));
    }
    static get is() { return "tag-message"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" } }; }
    static get style() { return "/**style-placeholder:tag-message:**/"; }
}
