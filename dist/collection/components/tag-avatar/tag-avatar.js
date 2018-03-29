export class TagAvatar {
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
    static get style() { return "/**style-placeholder:tag-avatar:**/"; }
}
