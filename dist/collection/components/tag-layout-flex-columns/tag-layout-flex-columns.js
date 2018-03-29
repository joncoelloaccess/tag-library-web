export class TagLayoutFlexColumns {
    render() {
        return h("slot", null);
    }
    static get is() { return "tag-layout-flex-columns"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:tag-layout-flex-columns:**/"; }
}
