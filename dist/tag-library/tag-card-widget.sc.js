/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagCardWidget {
    constructor() {
        /**
         * The description of the text
         */
        this.description = "";
        /**
         * The value of text for the widget
         */
        this.value = "";
        /**
         * Application name
         */
        this.applicationname = " ";
    }
    render() {
        const { accent, buttontext, buttonicon, applicationimage, applicationicon } = this;
        const appSty = {
            backgroundImage: applicationimage ? `url(${applicationimage})` : ""
        };
        return (h("tag-card", { accent: accent },
            h("section", { class: "wgt" },
                h("div", { class: "left" },
                    h("tag-text", { type: "value", inline: true }, this.value),
                    h("tag-text", { type: "feature" }, this.description),
                    buttontext || buttonicon ? (h("tag-button", { accent: this.accent, onClick: this.buttonclick }, "Test")) : null),
                h("div", { class: "right" },
                    this.applicationimage ? (h("div", { class: "wgt__app-image", style: appSty })) : (h("tag-icon-set", { icon: applicationicon, accent: accent })),
                    h("tag-text", { type: "feature" }, this.applicationname.toUpperCase())))));
    }
    static get is() { return "tag-card-widget"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" }, "applicationicon": { "type": String, "attr": "applicationicon" }, "applicationimage": { "type": String, "attr": "applicationimage" }, "applicationname": { "type": String, "attr": "applicationname" }, "buttonclick": { "type": "Any", "attr": "buttonclick" }, "buttonicon": { "type": String, "attr": "buttonicon" }, "buttontext": { "type": String, "attr": "buttontext" }, "description": { "type": String, "attr": "description" }, "value": { "type": String, "attr": "value" } }; }
    static get style() { return ".wgt[data-tag-card-widget] {\n  display: flex;\n  flex-flow: row;\n  padding: 0 10px 0 14px; }\n  .wgt__app-image[data-tag-card-widget] {\n    width: 48px;\n    height: 48px;\n    background-position: 0;\n    background-repeat: no-repeat;\n    margin: 0 auto 35px; }\n\n.left[data-tag-card-widget] {\n  flex: 1 1 auto; }\n  .left[data-tag-card-widget]   *[data-tag-card-widget] {\n    display: block; }\n  .left[data-tag-card-widget]   tag-text[type=\"feature\"][data-tag-card-widget] {\n    line-height: 30px;\n    margin: 5px 0; }\n\n.right[data-tag-card-widget] {\n  flex: 0 0 auto; }\n  .right[data-tag-card-widget]   tag-text[type=\"feature\"][data-tag-card-widget] {\n    color: #aaaab1;\n    line-height: 30px; }\n  .right[data-tag-card-widget]   tag-icon-set[data-tag-card-widget] {\n    display: block;\n    width: 48px;\n    height: 48px;\n    margin: 0 auto 35px; }"; }
}

export { TagCardWidget };
