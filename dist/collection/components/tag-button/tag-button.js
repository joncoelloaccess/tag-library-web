import { classBuilder } from "./utils";
export var Size;
(function (Size) {
    Size["default"] = "default";
    Size["large"] = "large";
    Size["small"] = "small";
    Size["extraSmall"] = "extra-small";
})(Size || (Size = {}));
export class TagButton {
    render() {
        return (h("button", { class: classBuilder(this.accent, this.size) },
            h("slot", null)));
    }
    static get is() { return "tag-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" }, "size": { "type": String, "attr": "size" } }; }
    static get style() { return "/**style-placeholder:tag-button:**/"; }
}
