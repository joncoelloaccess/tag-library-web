/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagButton {
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
    static get style() { return ":host {\n  color: #4c4f53;\n  padding: 9px 14px;\n  display: inline-block; }\n  :host tag-icon-set {\n    width: 24px;\n    height: 24px;\n    fill: #4c4f53;\n    vertical-align: bottom; }\n  :host .item__label {\n    transition: display 0 ease 150ms; }\n\n\@media screen and (min-width: 768px) {\n  .item__label {\n    display: none; } }\n\n\@media screen and (min-width: 1024px) {\n  .item__label {\n    display: inline; } }"; }
}

export { TagButton as TagMenuItem };
