/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagLayoutFlexColumns {
    render() {
        return h("slot", null);
    }
    static get is() { return "tag-layout-flex-columns"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "\@supports (display: flex) {\n  \@media screen and (min-width: 768px) {\n    :host {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      height: 100%; } }\n  ::slotted(*) {\n    flex: 1 1 40%;\n    box-sizing: border-box;\n    padding: 10px !important; } }"; }
}

export { TagLayoutFlexColumns };
