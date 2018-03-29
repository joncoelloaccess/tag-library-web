/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagCardDoc {
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
    static get style() { return ":host tag-text[type=\"feature\"] {\n  margin: 0 40px 0 14px;\n  display: block; }\n\n:host span {\n  padding: 3px 6px 8px 14px;\n  display: inline-block;\n  line-height: 23px;\n  color: #68b6bb; }"; }
}

export { TagCardDoc };
