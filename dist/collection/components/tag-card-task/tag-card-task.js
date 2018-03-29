export class TagCardTask {
    render() {
        return (h("tag-card", { accent: this.accent },
            h("tag-text", { type: "feature", inline: true }, this.heading),
            h("span", null, this.subtitle),
            h("div", { class: "content" },
                h("tag-avatar", { placeholder: this.avatarplaceholder, size: "small" }),
                h("ul", { class: "content__items" },
                    h("li", { class: "content__item" },
                        h("tag-icon-set", { class: "content__icon", icon: "Calendar" }),
                        " ",
                        this.when),
                    h("li", { class: "content__item" },
                        h("tag-icon-set", { class: "content__icon", icon: "User" }),
                        " ",
                        this.who)))));
    }
    static get is() { return "tag-card-task"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" }, "avatarplaceholder": { "type": String, "attr": "avatarplaceholder" }, "avatarsrc": { "type": String, "attr": "avatarsrc" }, "heading": { "type": String, "attr": "heading" }, "subtitle": { "type": String, "attr": "subtitle" }, "when": { "type": String, "attr": "when" }, "who": { "type": String, "attr": "who" } }; }
    static get style() { return "/**style-placeholder:tag-card-task:**/"; }
}
