export class TagCardWidget {
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
    static get style() { return "/**style-placeholder:tag-card-widget:**/"; }
}
