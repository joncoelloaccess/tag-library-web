/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagLayout {
    render() {
        return h("slot", null);
    }
    static get is() { return "tag-layout"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nbody {\n  margin: 40px;\n  font-family: \"Open Sans\", \"sans-serif\";\n  background-color: #fff;\n  color: #444; }\n\n/* no grid support? */\ntag-layout-sidebar {\n  float: left;\n  width: 20%; }\n\n.content {\n  float: right;\n  width: 80%; }\n\n/* make a grid */\n:host {\n  margin: 0 auto;\n  height: 100vh;\n  transition: all 500ms; }\n\n:host > * {\n  background-color: #444;\n  color: #fff;\n  border-radius: 5px;\n  padding: 20px;\n  font-size: 150%;\n  /* needed for the floated layout*/\n  margin-bottom: 10px; }\n\n\@supports (display: grid) {\n  \@media screen and (min-width: 768px) {\n    :host {\n      display: grid;\n      grid-gap: 0;\n      grid-template-columns: fit-content(60px) 1fr;\n      grid-template-rows: fit-content(45px) 1fr; } } }"; }
}

export { TagLayout };
