export class TagCard {
    render() {
        const cls = this.accent ? `card card-${this.accent.toLowerCase()}` : "card";
        return (h("div", { class: cls },
            h("slot", null)));
    }
    static get is() { return "tag-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" } }; }
    static get style() { return "/**style-placeholder:tag-card:**/"; }
}
