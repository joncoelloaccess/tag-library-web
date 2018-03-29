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
    static get style() { return ":host {\n  width: 100%;\n  box-sizing: border-box; }\n  :host .card {\n    background: #fff;\n    padding: 10px 14px;\n    display: block;\n    border-radius: 3px;\n    border: 1px solid #dbe0e5;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box; }\n  :host .card-access {\n    border-left: 4px solid #e5173f; }\n  :host .card-shiraz {\n    border-left: 4px solid #b00836; }\n  :host .card-fountain-blue {\n    border-left: 4px solid #53b8b4; }\n  :host .card-viridian-green {\n    border-left: 4px solid #009999; }\n  :host .card-atoll {\n    border-left: 4px solid #036d83; }\n  :host .card-midnight-blue {\n    border-left: 4px solid #373a65; }\n  :host .card-pink {\n    border-left: 4px solid #e37086; }\n  :host .card-lilac {\n    border-left: 4px solid #c688c5; }\n  :host .card-purple {\n    border-left: 4px solid #6c4290; }\n  :host .card-turquoise {\n    border-left: 4px solid #60b9cb; }\n  :host .card-glacier {\n    border-left: 4px solid #8bc7cb; }\n  :host .card-dark-green {\n    border-left: 4px solid #5c9068; }\n  :host .card-light-green {\n    border-left: 4px solid #5ba46c; }\n  :host .card-gold {\n    border-left: 4px solid #dda441; }\n  :host .card-orange {\n    border-left: 4px solid #f9a411; }\n  :host .card-yellow {\n    border-left: 4px solid #dfc24f; }\n  :host .card-light-brown {\n    border-left: 4px solid #a38854; }\n  :host .card-dark-brown {\n    border-left: 4px solid #655237; }\n  :host .card-title-text {\n    border-left: 4px solid #4c4f53; }\n  :host .card-default-text {\n    border-left: 4px solid #7e7e81; }\n  :host .card-subtitles {\n    border-left: 4px solid #aaaab1; }\n  :host .card-borders {\n    border-left: 4px solid #dbe0e5; }\n  :host .card-toolbars {\n    border-left: 4px solid #e9ecee; }\n  :host .card-selected {\n    border-left: 4px solid #e2ecef; }\n  :host .card-page-master {\n    border-left: 4px solid #ffffff; }\n  :host .card-grey-1 {\n    border-left: 4px solid #2c2e31; }\n  :host .card-grey-2 {\n    border-left: 4px solid #373737; }\n  :host .card-grey-3 {\n    border-left: 4px solid #808080; }\n  :host .card-grey-4 {\n    border-left: 4px solid #bdbdbd; }\n  :host .card-grey-5 {\n    border-left: 4px solid #dfdede; }"; }
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
    static get style() { return ":host {\n  font-size: 13px;\n  font-weight: 400;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  padding-bottom: 0; }\n  :host p {\n    font-size: 13px;\n    font-weight: 400;\n    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n:host([type=\"h1\"]),\n:host([type=\"h1\"]) > h1 {\n  font-size: 24px;\n  font-family: Lato, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 300; }\n\n:host([type=\"h2\"]),\n:host([type=\"h2\"]) > h2 {\n  font-size: 18px;\n  font-family: Lato, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 300; }\n\n:host([type=\"h3\"]),\n:host([type=\"h3\"]) > h3 {\n  font-size: 16px;\n  font-family: Lato, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 300; }\n\n:host([type=\"h4\"]),\n:host([type=\"h4\"]) > h4 {\n  font-size: 16px;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700; }\n\n:host([type=\"h5\"]),\n:host([type=\"h5\"]) > h5 {\n  font-size: 13px;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700; }\n\n:host([type=\"feature\"]),\n:host([type=\"feature\"]) > p {\n  font-size: 16px;\n  font-weight: 400;\n  font-family: Roboto;\n  padding-bottom: 0; }\n\n:host([type=\"small\"]),\n:host([type=\"small\"]) > p {\n  font-size: 12px;\n  font-weight: 400;\n  font-family: Roboto;\n  padding-bottom: 0;\n  padding-bottom: 0; }\n\n:host([type=\"min\"]),\n:host([type=\"min\"]) > p {\n  font-size: 11px;\n  font-weight: 400;\n  font-family: Roboto;\n  padding-bottom: 0; }\n\n:host([type=\"value\"]),\n:host([type=\"value\"]) > p {\n  font-size: 2.769em;\n  color: #009999;\n  font-family: Lato;\n  font-weight: 300; }"; }
}

export { TagCard, TagText };
