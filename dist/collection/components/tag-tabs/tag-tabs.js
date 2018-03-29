export class TagTabs {
    componentDidLoad() { }
    render() {
        const tabs = this.tabs ? this.tabs : [];
        return (h("div", null,
            h("ul", { class: "nav nav-tabs", role: "tablist" }, tabs.map(tab => (h("li", { role: "presentation", class: "active" },
                h("a", { href: tab.href, "aria-controls": "home", role: "tab", "data-toggle": "tab" }, tab.name))))),
            h("div", { class: "tab-content" }, tabs.map(() => (h("div", { role: "tabpanel", class: "tab-pane active", id: "home" }, "..."))))));
    }
    static get is() { return "tag-tabs"; }
    static get properties() { return { "tabs": { "type": "Any", "attr": "tabs" } }; }
    static get style() { return "/**style-placeholder:tag-tabs:**/"; }
}
