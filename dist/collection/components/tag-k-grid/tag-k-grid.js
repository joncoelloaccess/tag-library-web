export class TagKGrid {
    componentWillLoad() {
        this.ready.emit();
    }
    componentDidLoad() {
        const { config } = this;
        const $kg = $("#test");
        $kg.kendoGrid(config);
    }
    init(config) {
        this.config = Object.assign({}, config);
    }
    render() {
        return h("div", { id: "test" });
    }
    static get is() { return "tag-k-grid"; }
    static get properties() { return { "config": { "state": true }, "init": { "method": true }, "parent": { "state": true } }; }
    static get events() { return [{ "name": "ready", "method": "ready", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:tag-k-grid:**/"; }
}
