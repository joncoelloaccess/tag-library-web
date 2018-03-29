/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagNavbar {
    render() {
        return (h("header", null,
            h("nav", null,
                h("slot", null))));
    }
    static get is() { return "tag-navbar"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "[data-tag-navbar-host] {\n  grid-column: 1 / -1;\n  \n  clear: both; }\n  [data-tag-navbar-host]   .access__icon[data-tag-navbar] {\n    height: 32px;\n    padding: 9px 14px; }\n\nheader[data-tag-navbar] {\n  padding-bottom: 50px;\n  position: relative; }\n\nnav[data-tag-navbar] {\n  position: absolute;\n  top: 0;\n  z-index: 20;\n  height: 50px;\n  width: 100%;\n  margin: 0;\n  background-color: #fff;\n  box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21); }\n\ntag-access-logo[data-tag-navbar] {\n  position: relative;\n  height: 0;\n  width: 100%;\n  padding: 0;\n  padding-bottom: 100%;\n   }"; }
}

export { TagNavbar };
