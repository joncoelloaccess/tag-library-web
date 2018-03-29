/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

const stClass = (cls) => `content__status content__status--${cls}`;
const getStatusIconProps = (status) => {
    if (!status)
        return;
    switch (status.toLowerCase()) {
        case "success":
            return {
                i: "Tick",
                class: stClass("success")
            };
        case "warning":
            return {
                i: "Warning",
                class: stClass("warning")
            };
    }
};

class TagCardDocFinance {
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
    static get style() { return "[data-tag-card-finance-host] {\n  text-align: center; }\n  [data-tag-card-finance-host]   .content[data-tag-card-finance] {\n    padding: 0 80px;\n    position: relative; }\n    [data-tag-card-finance-host]   .content__heading[data-tag-card-finance] {\n      display: block;\n      margin-bottom: 15px; }\n  [data-tag-card-finance-host]   .info-icon[data-tag-card-finance] {\n    width: 50px; }\n  [data-tag-card-finance-host]   .content__status[data-tag-card-finance] {\n    width: 28px;\n    position: absolute;\n    right: 15px; }\n    [data-tag-card-finance-host]   .content__status--warning[data-tag-card-finance] {\n      fill: #f9a411; }\n    [data-tag-card-finance-host]   .content__status--success[data-tag-card-finance] {\n      fill: #5c9068; }\n  [data-tag-card-finance-host]   hr[data-tag-card-finance] {\n    border-top: 1px solid #dbe0e5;\n    width: 80%; }"; }
}

export { TagCardDocFinance as TagCardFinance };
