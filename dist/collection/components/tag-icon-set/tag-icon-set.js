import icons from "./tag-icons";
export class TagIconSet {
    render() {
        const { icon, accent } = this;
        const cls = accent ? `icon--${accent.toLowerCase()}` : `icon--default`;
        return h("span", { class: cls }, icons[icon]);
    }
    static get is() { return "tag-icon-set"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" }, "icon": { "type": String, "attr": "icon" } }; }
    static get style() { return "/**style-placeholder:tag-icon-set:**/"; }
}
