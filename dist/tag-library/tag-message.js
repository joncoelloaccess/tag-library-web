/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagMessage {
    render() {
        const props = {};
        const { accent } = this;
        if (accent) {
            props.class = this.accent ? `aside-${this.accent.toLowerCase()}` : "";
        }
        return (h("aside", Object.assign({}, props),
            h("slot", null)));
    }
    static get is() { return "tag-message"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" } }; }
    static get style() { return ":host aside {\n  background-color: #eef0f2;\n  border-left: 2px solid #7e7e81; }\n\n:host .aside-access {\n  border-left: 2px solid #e5173f; }\n\n:host .aside-shiraz {\n  border-left: 2px solid #b00836; }\n\n:host .aside-fountain-blue {\n  border-left: 2px solid #53b8b4; }\n\n:host .aside-viridian-green {\n  border-left: 2px solid #009999; }\n\n:host .aside-atoll {\n  border-left: 2px solid #036d83; }\n\n:host .aside-midnight-blue {\n  border-left: 2px solid #373a65; }\n\n:host .aside-pink {\n  border-left: 2px solid #e37086; }\n\n:host .aside-lilac {\n  border-left: 2px solid #c688c5; }\n\n:host .aside-purple {\n  border-left: 2px solid #6c4290; }\n\n:host .aside-turquoise {\n  border-left: 2px solid #60b9cb; }\n\n:host .aside-glacier {\n  border-left: 2px solid #8bc7cb; }\n\n:host .aside-dark-green {\n  border-left: 2px solid #5c9068; }\n\n:host .aside-light-green {\n  border-left: 2px solid #5ba46c; }\n\n:host .aside-gold {\n  border-left: 2px solid #dda441; }\n\n:host .aside-orange {\n  border-left: 2px solid #f9a411; }\n\n:host .aside-yellow {\n  border-left: 2px solid #dfc24f; }\n\n:host .aside-light-brown {\n  border-left: 2px solid #a38854; }\n\n:host .aside-dark-brown {\n  border-left: 2px solid #655237; }\n\n:host .aside-title-text {\n  border-left: 2px solid #4c4f53; }\n\n:host .aside-default-text {\n  border-left: 2px solid #7e7e81; }\n\n:host .aside-subtitles {\n  border-left: 2px solid #aaaab1; }\n\n:host .aside-borders {\n  border-left: 2px solid #dbe0e5; }\n\n:host .aside-toolbars {\n  border-left: 2px solid #e9ecee; }\n\n:host .aside-selected {\n  border-left: 2px solid #e2ecef; }\n\n:host .aside-page-master {\n  border-left: 2px solid #ffffff; }\n\n:host .aside-grey-1 {\n  border-left: 2px solid #2c2e31; }\n\n:host .aside-grey-2 {\n  border-left: 2px solid #373737; }\n\n:host .aside-grey-3 {\n  border-left: 2px solid #808080; }\n\n:host .aside-grey-4 {\n  border-left: 2px solid #bdbdbd; }\n\n:host .aside-grey-5 {\n  border-left: 2px solid #dfdede; }"; }
}

export { TagMessage };
