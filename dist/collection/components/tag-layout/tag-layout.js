export class TagLayout {
    render() {
        return h("slot", null);
    }
    static get is() { return "tag-layout"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:tag-layout:**/"; }
}
