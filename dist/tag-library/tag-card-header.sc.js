/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagCardHeader {
    render() {
        return (h("tag-card", null,
            h("tag-text", { type: "h4" }, this.heading),
            h("hr", null),
            h("slot", null)));
    }
    static get is() { return "tag-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "heading": { "type": String, "attr": "heading" } }; }
    static get style() { return "[data-tag-card-header-host]   hr[data-tag-card-header] {\n  border-top: 1px solid #dbe0e5; }"; }
}

class TagMainHeader {
    render() {
        const props = {};
        const { accent } = this;
        if (accent) {
            props.class = this.accent ? `aside-${this.accent.toLowerCase()}` : "";
        }
        return (h("header", Object.assign({}, props),
            h("slot", null)));
    }
    static get is() { return "tag-main-header"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" } }; }
    static get style() { return "[data-tag-main-header-host]   header[data-tag-main-header] {\n  background-color: #009999;\n  background: linear-gradient(90deg, #009999, #036d83);\n  width: 100%;\n  box-sizing: border-box;\n  color: #ffffff; }"; }
}

var PayWpStates;
(function (PayWpStates) {
    PayWpStates["none"] = "none";
    PayWpStates["halfDay"] = "half-day";
    PayWpStates["fullDay"] = "full-day";
})(PayWpStates || (PayWpStates = {}));
const payWpFactory = initialState => {
    let internalState = initialState;
    const cycledValue = (val) => {
        if (val === PayWpStates.none)
            return PayWpStates.halfDay;
        if (val === PayWpStates.halfDay)
            return PayWpStates.fullDay;
        if (val === PayWpStates.fullDay)
            return PayWpStates.none;
    };
    const transition = () => {
        internalState = cycledValue(internalState);
        return {
            transition: transition,
            value: {
                value: internalState
            }
        };
    };
    return {
        transition: transition,
        value: {
            value: initialState
        }
    };
};

const buttonColour = new Map()
    .set(PayWpStates.none, "default")
    .set(PayWpStates.halfDay, "glacier")
    .set(PayWpStates.fullDay, "viridian-green");
class TagPayWp {
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
    static get style() { return "[data-tag-pay-wp-host] {\n  display: inline-block; }\n\n.paywp[data-tag-pay-wp] {\n  display: inline-block;\n  width: 100px; }\n  .paywp__button[data-tag-pay-wp] {\n    margin-bottom: 20px; }\n  .paywp__container[data-tag-pay-wp] {\n    display: flex;\n    flex-direction: column; }"; }
}

class TagProfile {
    onEditProfileImage() {
        this.editProfileImage.emit();
    }
    render() {
        const { dob, gender, name, nationality, src } = this;
        return (h("div", null,
            h("div", { class: "prof__img", style: {
                    backgroundSize: "cover",
                    backgroundImage: `url(${src})`
                } },
                h("div", { class: "prof__edit", onClick: () => this.onEditProfileImage() },
                    h("tag-icon-set", { icon: "Edit", accent: "Selected", style: {
                            width: "24px",
                            height: "24px",
                            padding: "10px"
                        } }))),
            h("tag-text", { type: "h2" }, name),
            h("hr", null),
            gender ? h("tag-text", { type: "h3" },
                "Gender - ",
                gender) : null,
            dob ? h("tag-text", { type: "h3" },
                "Date of birth - ",
                dob) : null,
            nationality ? (h("tag-text", { type: "h3" },
                "Nationality - ",
                nationality)) : null));
    }
    static get is() { return "tag-profile"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "dob": { "type": String, "attr": "dob" }, "gender": { "type": String, "attr": "gender" }, "name": { "type": String, "attr": "name" }, "nationality": { "type": String, "attr": "nationality" }, "src": { "type": String, "attr": "src" } }; }
    static get events() { return [{ "name": "editProfileImage", "method": "editProfileImage", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "[data-tag-profile-host] {\n  text-align: center; }\n  [data-tag-profile-host]   hr[data-tag-profile] {\n    border-top: 1px solid #dbe0e5; }\n  [data-tag-profile-host]   .prof__img[data-tag-profile] {\n    display: inline-block;\n    height: 230px;\n    width: 230px;\n    background-color: #009999;\n    border-radius: 115px;\n    position: relative; }\n  [data-tag-profile-host]   .prof__edit[data-tag-profile] {\n    position: absolute;\n    height: 44px;\n    width: 44px;\n    border-radius: 23px;\n    background-color: #009999;\n    right: 0;\n    bottom: 30px;\n    cursor: pointer; }"; }
}

class TagThreeColLayout {
    render() {
        return h("slot", null);
    }
    static get is() { return "tag-three-col-layout"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "p1": { "type": String, "attr": "p-1" } }; }
    static get style() { return "[data-tag-three-col-layout-host] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%; }\n\n\@supports (display: grid) {\n  \@media screen and (min-width: 768px) {\n    [data-tag-three-col-layout-host] {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 14px;\n      padding: 14px;\n      width: 100%;\n      height: calc(100% - 44px); } }\n  [data-tag-three-col-layout-slot] > * {\n    box-sizing: border-box; }\n  [data-tag-three-col-layout-slot] > .tall {\n    grid-row-end: span 2; } }"; }
}

export { TagCardHeader, TagMainHeader, TagPayWp, TagProfile, TagThreeColLayout };
