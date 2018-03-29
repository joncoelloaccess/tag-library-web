/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagBadge {
    render() {
        return h("span", null, this.value);
    }
    static get is() { return "tag-badge"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" }, "value": { "type": String, "attr": "value" } }; }
    static get style() { return "[data-tag-badge-host]   span[data-tag-badge] {\n  position: absolute;\n  top: -5px;\n  right: -10px;\n  padding: 3px 6px;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px; }"; }
}

export { TagBadge };
