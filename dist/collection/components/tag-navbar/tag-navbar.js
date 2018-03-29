export class TagNavbar {
    render() {
        return (h("header", null,
            h("nav", null,
                h("slot", null))));
    }
    static get is() { return "tag-navbar"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:tag-navbar:**/"; }
}
