/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagLayout {
    render() {
        return h("slot", null);
    }
    static get is() { return "tag-layout"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "*[data-tag-layout], *[data-tag-layout]:before, *[data-tag-layout]:after {\n  box-sizing: border-box; }\n\nbody[data-tag-layout] {\n  margin: 40px;\n  font-family: \"Open Sans\", \"sans-serif\";\n  background-color: #fff;\n  color: #444; }\n\n\ntag-layout-sidebar[data-tag-layout] {\n  float: left;\n  width: 20%; }\n\n.content[data-tag-layout] {\n  float: right;\n  width: 80%; }\n\n\n[data-tag-layout-host] {\n  margin: 0 auto;\n  height: 100vh;\n  transition: all 500ms; }\n\n[data-tag-layout-host]    > *[data-tag-layout] {\n  background-color: #444;\n  color: #fff;\n  border-radius: 5px;\n  padding: 20px;\n  font-size: 150%;\n  \n  margin-bottom: 10px; }\n\n\@supports (display: grid) {\n  \@media screen and (min-width: 768px) {\n    [data-tag-layout-host] {\n      display: grid;\n      grid-gap: 0;\n      grid-template-columns: fit-content(60px) 1fr;\n      grid-template-rows: fit-content(45px) 1fr; } } }"; }
}

export { TagLayout };
