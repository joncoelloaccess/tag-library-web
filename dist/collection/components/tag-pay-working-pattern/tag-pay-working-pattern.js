export class TagPayWorkingPattern {
    render() {
        return (h("div", null,
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Monday" }),
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Tuesday" }),
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Wednesday" }),
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Thursday" }),
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Friday" })));
    }
    static get is() { return "tag-pay-working-pattern"; }
    static get style() { return "/**style-placeholder:tag-pay-working-pattern:**/"; }
}
