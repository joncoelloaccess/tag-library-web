import { payWpFactory, PayWpStates } from "./tag-pay-wp.util";
const buttonColour = new Map()
    .set(PayWpStates.none, "default")
    .set(PayWpStates.halfDay, "glacier")
    .set(PayWpStates.fullDay, "viridian-green");
export class TagPayWp {
    constructor() {
        this.payWpMachine = payWpFactory(PayWpStates.none);
        this.state = this.payWpMachine.value;
        this.workingPattern = new Map()
            .set(PayWpStates.none, h("svg", { viewBox: "0 0 132 28", xmlns: "http://www.w3.org/2000/svg" },
            h("path", { d: "M26.34 18A13.14 13.14 0 0 1 .75 13.87a13.13 13.13 0 0 1 25.59-4.12h79.14a13.14 13.14 0 0 1 25.55 4.23A13.13 13.13 0 0 1 105.41 18H26.34z", fill: "none", stroke: "#ced4d9", "stroke-width": "1.5" })))
            .set(PayWpStates.halfDay, h("svg", { viewBox: "0 0 132 28", xmlns: "http://www.w3.org/2000/svg" },
            h("path", { d: "M65.89 9.64h39.59a13.14 13.14 0 0 1 25.55 4.23 13.13 13.13 0 0 1-25.62 4.03H65.89V9.64z", fill: "none", stroke: "#ced4d9", "stroke-width": "1.5" }),
            h("path", { d: "M26.32 18.05A13.14 13.14 0 0 1 .75 13.87a13.13 13.13 0 0 1 25.6-4.07H65.9v8.25H26.32z", fill: "#67c2c2", stroke: "#67c2c2", "stroke-width": "1.5", "stroke-linecap": "butt", "stroke-miterlimit": "1.41" }),
            h("circle", { cx: "65.89", cy: "13.88", r: "13.13", fill: "#4eb8b5", stroke: "#409794", "stroke-width": "1.5" })))
            .set(PayWpStates.fullDay, h("svg", { viewBox: "0 0 132 28", xmlns: "http://www.w3.org/2000/svg" },
            h("path", { d: "M26.34 18A13.14 13.14 0 0 1 .75 13.87a13.13 13.13 0 0 1 25.59-4.12H107V18H26.34z", fill: "#66c2c2", stroke: "#67c2c2", "stroke-width": "1.5" }),
            h("circle", { cx: "117.91", cy: "13.88", r: "13.13", fill: "#4eb8b5", stroke: "#409794", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-miterlimit": "1.5" })));
    }
    changeState() {
        this.state = this.payWpMachine.transition().value;
        this.value = this.state.value;
    }
    render() {
        const progressImg = this.workingPattern.get(this.state.value);
        return (h("div", { class: "paywp" },
            h("div", { class: "paywp__container" },
                h("tag-button", { class: "paywp__button", accent: buttonColour.get(this.state.value), onClick: () => this.changeState() }, this.dayofweek),
                progressImg)));
    }
    static get is() { return "tag-pay-wp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "dayofweek": { "type": String, "attr": "dayofweek" }, "payWpMachine": { "state": true }, "state": { "state": true }, "value": { "type": String, "attr": "value" }, "workingPattern": { "state": true } }; }
    static get style() { return "/**style-placeholder:tag-pay-wp:**/"; }
}
