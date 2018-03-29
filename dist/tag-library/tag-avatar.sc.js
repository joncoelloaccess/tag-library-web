/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagAvatar {
    render() {
        const { src, placeholder, size } = this;
        const placeholderText = src ? "\u00a0" : placeholder;
        const avatarProps = {
            class: `avatar ${size}`
        };
        if (src) {
            avatarProps.style.backgroundImage = `url(${src})`;
        }
        return h("div", Object.assign({}, avatarProps), placeholderText);
    }
    static get is() { return "tag-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "placeholder": { "type": String, "attr": "placeholder" }, "size": { "type": String, "attr": "size" }, "src": { "type": String, "attr": "src" } }; }
    static get style() { return "[data-tag-avatar-host] {\n  display: inline-block;\n  vertical-align: top; }\n\n.avatar[data-tag-avatar] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n  line-height: 32px;\n  border-radius: 50%;\n  font-size: 20px;\n  font-weight: 100;\n  background-color: #8bc7cb;\n  background-size: cover;\n  background-position: 100%;\n  color: #fff; }\n\n.small[data-tag-avatar] {\n  width: 36px;\n  height: 36px; }"; }
}

class TagCardTask {
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
    static get style() { return "[data-tag-card-task-host]   tag-text[type=\"feature\"][data-tag-card-task] {\n  margin: 0 40px 0 14px;\n  display: block; }\n\n[data-tag-card-task-host]   span[data-tag-card-task] {\n  padding: 3px 6px 8px 14px;\n  display: inline-block;\n  line-height: 23px; }\n\n[data-tag-card-task-host]   .content[data-tag-card-task] {\n  margin: 0 100px 0 14px;\n  padding: 0; }\n  [data-tag-card-task-host]   .content__items[data-tag-card-task] {\n    display: inline-block;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 12px;\n    font-weight: 400;\n    color: #4c4f53; }\n  [data-tag-card-task-host]   .content__item[data-tag-card-task] {\n    padding: 5px 5px 0 15px; }\n  [data-tag-card-task-host]   .content__icon[data-tag-card-task] {\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    vertical-align: baseline; }"; }
}

export { TagAvatar, TagCardTask };
