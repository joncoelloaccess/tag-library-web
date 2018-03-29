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
    static get style() { return "[data-tag-menu-item-host] {\n  color: #4c4f53;\n  padding: 9px 14px;\n  display: inline-block; }\n  [data-tag-menu-item-host]   tag-icon-set[data-tag-menu-item] {\n    width: 24px;\n    height: 24px;\n    fill: #4c4f53;\n    vertical-align: bottom; }\n  [data-tag-menu-item-host]   .item__label[data-tag-menu-item] {\n    transition: display 0 ease 150ms; }\n\n\@media screen and (min-width: 768px) {\n  .item__label[data-tag-menu-item] {\n    display: none; } }\n\n\@media screen and (min-width: 1024px) {\n  .item__label[data-tag-menu-item] {\n    display: inline; } }"; }
}

export { TagButton as TagMenuItem };
