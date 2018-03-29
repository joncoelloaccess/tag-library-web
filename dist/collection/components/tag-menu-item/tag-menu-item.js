export class TagButton {
    render() {
        const { i } = this;
        console.log("icon", i, this);
        return (h("span", null,
            h("tag-icon-set", { icon: i }),
            " ",
            h("span", { class: "item__label" },
                h("slot", null))));
    }
    static get is() { return "tag-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "i": { "type": String, "attr": "i" } }; }
    static get style() { return "/**style-placeholder:tag-menu-item:**/"; }
}
