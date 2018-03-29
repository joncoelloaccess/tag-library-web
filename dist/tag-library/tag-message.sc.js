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
    static get style() { return "[data-tag-message-host]   aside[data-tag-message] {\n  background-color: #eef0f2;\n  border-left: 2px solid #7e7e81; }\n\n[data-tag-message-host]   .aside-access[data-tag-message] {\n  border-left: 2px solid #e5173f; }\n\n[data-tag-message-host]   .aside-shiraz[data-tag-message] {\n  border-left: 2px solid #b00836; }\n\n[data-tag-message-host]   .aside-fountain-blue[data-tag-message] {\n  border-left: 2px solid #53b8b4; }\n\n[data-tag-message-host]   .aside-viridian-green[data-tag-message] {\n  border-left: 2px solid #009999; }\n\n[data-tag-message-host]   .aside-atoll[data-tag-message] {\n  border-left: 2px solid #036d83; }\n\n[data-tag-message-host]   .aside-midnight-blue[data-tag-message] {\n  border-left: 2px solid #373a65; }\n\n[data-tag-message-host]   .aside-pink[data-tag-message] {\n  border-left: 2px solid #e37086; }\n\n[data-tag-message-host]   .aside-lilac[data-tag-message] {\n  border-left: 2px solid #c688c5; }\n\n[data-tag-message-host]   .aside-purple[data-tag-message] {\n  border-left: 2px solid #6c4290; }\n\n[data-tag-message-host]   .aside-turquoise[data-tag-message] {\n  border-left: 2px solid #60b9cb; }\n\n[data-tag-message-host]   .aside-glacier[data-tag-message] {\n  border-left: 2px solid #8bc7cb; }\n\n[data-tag-message-host]   .aside-dark-green[data-tag-message] {\n  border-left: 2px solid #5c9068; }\n\n[data-tag-message-host]   .aside-light-green[data-tag-message] {\n  border-left: 2px solid #5ba46c; }\n\n[data-tag-message-host]   .aside-gold[data-tag-message] {\n  border-left: 2px solid #dda441; }\n\n[data-tag-message-host]   .aside-orange[data-tag-message] {\n  border-left: 2px solid #f9a411; }\n\n[data-tag-message-host]   .aside-yellow[data-tag-message] {\n  border-left: 2px solid #dfc24f; }\n\n[data-tag-message-host]   .aside-light-brown[data-tag-message] {\n  border-left: 2px solid #a38854; }\n\n[data-tag-message-host]   .aside-dark-brown[data-tag-message] {\n  border-left: 2px solid #655237; }\n\n[data-tag-message-host]   .aside-title-text[data-tag-message] {\n  border-left: 2px solid #4c4f53; }\n\n[data-tag-message-host]   .aside-default-text[data-tag-message] {\n  border-left: 2px solid #7e7e81; }\n\n[data-tag-message-host]   .aside-subtitles[data-tag-message] {\n  border-left: 2px solid #aaaab1; }\n\n[data-tag-message-host]   .aside-borders[data-tag-message] {\n  border-left: 2px solid #dbe0e5; }\n\n[data-tag-message-host]   .aside-toolbars[data-tag-message] {\n  border-left: 2px solid #e9ecee; }\n\n[data-tag-message-host]   .aside-selected[data-tag-message] {\n  border-left: 2px solid #e2ecef; }\n\n[data-tag-message-host]   .aside-page-master[data-tag-message] {\n  border-left: 2px solid #ffffff; }\n\n[data-tag-message-host]   .aside-grey-1[data-tag-message] {\n  border-left: 2px solid #2c2e31; }\n\n[data-tag-message-host]   .aside-grey-2[data-tag-message] {\n  border-left: 2px solid #373737; }\n\n[data-tag-message-host]   .aside-grey-3[data-tag-message] {\n  border-left: 2px solid #808080; }\n\n[data-tag-message-host]   .aside-grey-4[data-tag-message] {\n  border-left: 2px solid #bdbdbd; }\n\n[data-tag-message-host]   .aside-grey-5[data-tag-message] {\n  border-left: 2px solid #dfdede; }"; }
}

export { TagMessage };
