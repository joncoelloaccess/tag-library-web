export class TagCardDoc {
    render() {
        const { heading, action, who, whoref, when } = this;
        return (h("tag-card", null,
            h("tag-text", { type: "feature", inline: true }, heading),
            h("span", null,
                action,
                " ",
                h("a", { href: whoref }, who),
                " ",
                when)));
    }
    static get is() { return "tag-card-doc"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "action": { "type": String, "attr": "action" }, "heading": { "type": String, "attr": "heading" }, "when": { "type": String, "attr": "when" }, "who": { "type": String, "attr": "who" }, "whoref": { "type": String, "attr": "whoref" } }; }
    static get style() { return "/**style-placeholder:tag-card-doc:**/"; }
}
