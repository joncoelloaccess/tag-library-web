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
    static get style() { return ".wgt {\n  display: flex;\n  flex-flow: row;\n  padding: 0 10px 0 14px; }\n  .wgt__app-image {\n    width: 48px;\n    height: 48px;\n    background-position: 0;\n    background-repeat: no-repeat;\n    margin: 0 auto 35px; }\n\n.left {\n  flex: 1 1 auto; }\n  .left * {\n    display: block; }\n  .left tag-text[type=\"feature\"] {\n    line-height: 30px;\n    margin: 5px 0; }\n\n.right {\n  flex: 0 0 auto; }\n  .right tag-text[type=\"feature\"] {\n    color: #aaaab1;\n    line-height: 30px; }\n  .right tag-icon-set {\n    display: block;\n    width: 48px;\n    height: 48px;\n    margin: 0 auto 35px; }"; }
}

export { TagCardWidget };
