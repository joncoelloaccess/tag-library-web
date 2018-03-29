import { getStatusIconProps } from "./tag-card-finance.utils";
export class TagCardDocFinance {
    render() {
        const { heading, icon, message, status } = this;
        const tagIconProps = getStatusIconProps(status);
        const tagIcon = tagIconProps ? h("tag-icon-set", Object.assign({}, tagIconProps)) : null;
        return (h("tag-card", null,
            h("div", { class: "content" },
                tagIcon,
                h("tag-icon-set", { class: "info-icon", icon: icon }),
                h("tag-text", { type: "h2", inline: true, class: "content__heading" }, heading),
                h("tag-text", { type: "default" }, message),
                h("hr", null)),
            h("slot", null)));
    }
    static get is() { return "tag-card-finance"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "heading": { "type": String, "attr": "heading" }, "icon": { "type": String, "attr": "icon" }, "message": { "type": String, "attr": "message" }, "status": { "type": String, "attr": "status" } }; }
    static get style() { return "/**style-placeholder:tag-card-finance:**/"; }
}
