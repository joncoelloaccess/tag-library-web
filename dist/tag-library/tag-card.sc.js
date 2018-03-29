/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagCard {
    render() {
        const cls = this.accent ? `card card-${this.accent.toLowerCase()}` : "card";
        return (h("div", { class: cls },
            h("slot", null)));
    }
    static get is() { return "tag-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" } }; }
    static get style() { return "[data-tag-card-host] {\n  width: 100%;\n  box-sizing: border-box; }\n  [data-tag-card-host]   .card[data-tag-card] {\n    background: #fff;\n    padding: 10px 14px;\n    display: block;\n    border-radius: 3px;\n    border: 1px solid #dbe0e5;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box; }\n  [data-tag-card-host]   .card-access[data-tag-card] {\n    border-left: 4px solid #e5173f; }\n  [data-tag-card-host]   .card-shiraz[data-tag-card] {\n    border-left: 4px solid #b00836; }\n  [data-tag-card-host]   .card-fountain-blue[data-tag-card] {\n    border-left: 4px solid #53b8b4; }\n  [data-tag-card-host]   .card-viridian-green[data-tag-card] {\n    border-left: 4px solid #009999; }\n  [data-tag-card-host]   .card-atoll[data-tag-card] {\n    border-left: 4px solid #036d83; }\n  [data-tag-card-host]   .card-midnight-blue[data-tag-card] {\n    border-left: 4px solid #373a65; }\n  [data-tag-card-host]   .card-pink[data-tag-card] {\n    border-left: 4px solid #e37086; }\n  [data-tag-card-host]   .card-lilac[data-tag-card] {\n    border-left: 4px solid #c688c5; }\n  [data-tag-card-host]   .card-purple[data-tag-card] {\n    border-left: 4px solid #6c4290; }\n  [data-tag-card-host]   .card-turquoise[data-tag-card] {\n    border-left: 4px solid #60b9cb; }\n  [data-tag-card-host]   .card-glacier[data-tag-card] {\n    border-left: 4px solid #8bc7cb; }\n  [data-tag-card-host]   .card-dark-green[data-tag-card] {\n    border-left: 4px solid #5c9068; }\n  [data-tag-card-host]   .card-light-green[data-tag-card] {\n    border-left: 4px solid #5ba46c; }\n  [data-tag-card-host]   .card-gold[data-tag-card] {\n    border-left: 4px solid #dda441; }\n  [data-tag-card-host]   .card-orange[data-tag-card] {\n    border-left: 4px solid #f9a411; }\n  [data-tag-card-host]   .card-yellow[data-tag-card] {\n    border-left: 4px solid #dfc24f; }\n  [data-tag-card-host]   .card-light-brown[data-tag-card] {\n    border-left: 4px solid #a38854; }\n  [data-tag-card-host]   .card-dark-brown[data-tag-card] {\n    border-left: 4px solid #655237; }\n  [data-tag-card-host]   .card-title-text[data-tag-card] {\n    border-left: 4px solid #4c4f53; }\n  [data-tag-card-host]   .card-default-text[data-tag-card] {\n    border-left: 4px solid #7e7e81; }\n  [data-tag-card-host]   .card-subtitles[data-tag-card] {\n    border-left: 4px solid #aaaab1; }\n  [data-tag-card-host]   .card-borders[data-tag-card] {\n    border-left: 4px solid #dbe0e5; }\n  [data-tag-card-host]   .card-toolbars[data-tag-card] {\n    border-left: 4px solid #e9ecee; }\n  [data-tag-card-host]   .card-selected[data-tag-card] {\n    border-left: 4px solid #e2ecef; }\n  [data-tag-card-host]   .card-page-master[data-tag-card] {\n    border-left: 4px solid #ffffff; }\n  [data-tag-card-host]   .card-grey-1[data-tag-card] {\n    border-left: 4px solid #2c2e31; }\n  [data-tag-card-host]   .card-grey-2[data-tag-card] {\n    border-left: 4px solid #373737; }\n  [data-tag-card-host]   .card-grey-3[data-tag-card] {\n    border-left: 4px solid #808080; }\n  [data-tag-card-host]   .card-grey-4[data-tag-card] {\n    border-left: 4px solid #bdbdbd; }\n  [data-tag-card-host]   .card-grey-5[data-tag-card] {\n    border-left: 4px solid #dfdede; }"; }
}

// enum Typeography {
//   h1 = "h1",
//   h2 = "h2",
//   h3 = "h3",
//   h4 = "h4",
//   h5 = "h5",
//   feature = "feature",
//   small = "small",
//   min = "min"
// }
const getTextType = type => {
    switch (type) {
        case "h1":
            return (h("h1", null,
                h("slot", null)));
        case "h2":
            return (h("h2", null,
                h("slot", null)));
        case "h3":
            return (h("h3", null,
                h("slot", null)));
        case "h4":
            return (h("h4", null,
                h("slot", null)));
        case "h5":
            return (h("h5", null,
                h("slot", null)));
        case "small":
            return (h("small", null,
                h("slot", null)));
        default:
            return (h("p", null,
                h("slot", null)));
    }
};
class TagText {
    render() {
        const { inline, type } = this;
        return inline ? h("slot", null) : getTextType(type);
    }
    static get is() { return "tag-text"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "inline": { "type": Boolean, "attr": "inline" }, "type": { "type": String, "attr": "type" } }; }
    static get style() { return "[data-tag-text-host] {\n  font-size: 13px;\n  font-weight: 400;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  padding-bottom: 0; }\n  [data-tag-text-host]   p[data-tag-text] {\n    font-size: 13px;\n    font-weight: 400;\n    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n[type=\"h1\"][data-tag-text-host], [type=\"h1\"][data-tag-text-host]    > h1[data-tag-text] {\n  font-size: 24px;\n  font-family: Lato, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 300; }\n\n[type=\"h2\"][data-tag-text-host], [type=\"h2\"][data-tag-text-host]    > h2[data-tag-text] {\n  font-size: 18px;\n  font-family: Lato, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 300; }\n\n[type=\"h3\"][data-tag-text-host], [type=\"h3\"][data-tag-text-host]    > h3[data-tag-text] {\n  font-size: 16px;\n  font-family: Lato, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 300; }\n\n[type=\"h4\"][data-tag-text-host], [type=\"h4\"][data-tag-text-host]    > h4[data-tag-text] {\n  font-size: 16px;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700; }\n\n[type=\"h5\"][data-tag-text-host], [type=\"h5\"][data-tag-text-host]    > h5[data-tag-text] {\n  font-size: 13px;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700; }\n\n[type=\"feature\"][data-tag-text-host], [type=\"feature\"][data-tag-text-host]    > p[data-tag-text] {\n  font-size: 16px;\n  font-weight: 400;\n  font-family: Roboto;\n  padding-bottom: 0; }\n\n[type=\"small\"][data-tag-text-host], [type=\"small\"][data-tag-text-host]    > p[data-tag-text] {\n  font-size: 12px;\n  font-weight: 400;\n  font-family: Roboto;\n  padding-bottom: 0;\n  padding-bottom: 0; }\n\n[type=\"min\"][data-tag-text-host], [type=\"min\"][data-tag-text-host]    > p[data-tag-text] {\n  font-size: 11px;\n  font-weight: 400;\n  font-family: Roboto;\n  padding-bottom: 0; }\n\n[type=\"value\"][data-tag-text-host], [type=\"value\"][data-tag-text-host]    > p[data-tag-text] {\n  font-size: 2.769em;\n  color: #009999;\n  font-family: Lato;\n  font-weight: 300; }"; }
}

export { TagCard, TagText };
