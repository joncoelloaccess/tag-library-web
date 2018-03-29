export class TagThreeColLayout {
    render() {
        return h("slot", null);
    }
    static get is() { return "tag-three-col-layout"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "p1": { "type": String, "attr": "p-1" } }; }
    static get style() { return "/**style-placeholder:tag-three-col-layout:**/"; }
}
