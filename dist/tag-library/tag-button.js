/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

const classBuilder = (accent, size) => {
    const acnt = accent ? [`btn__accent--${accent.toLowerCase()}`] : [];
    const sz = size ? [`btn__size--${size}`] : [];
    return ["btn", ...acnt, ...sz].join(" ");
};

var Size;
(function (Size) {
    Size["default"] = "default";
    Size["large"] = "large";
    Size["small"] = "small";
    Size["extraSmall"] = "extra-small";
})(Size || (Size = {}));
class TagButton {
    render() {
        return (h("button", { class: classBuilder(this.accent, this.size) },
            h("slot", null)));
    }
    static get is() { return "tag-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "accent": { "type": String, "attr": "accent" }, "size": { "type": String, "attr": "size" } }; }
    static get style() { return "button {\n  min-width: 74px;\n  margin: 0;\n  padding: 0 12px;\n  height: 30px;\n  border: 1px solid;\n  border-radius: 2px;\n  font-size: 13px;\n  line-height: 30px;\n  box-shadow: none;\n  position: relative;\n  box-sizing: content-box;\n  cursor: pointer; }\n  button.btn__accent--access {\n    background-color: #e5173f;\n    border-color: #b71232;\n    color: #fff; }\n    button.btn__accent--access:active {\n      background-color: #ce1539; }\n    button.btn__accent--access:hover {\n      background-color: #ea2c51; }\n  button.btn__accent--shiraz {\n    background-color: #b00836;\n    border-color: #7f0627;\n    color: #fff; }\n    button.btn__accent--shiraz:active {\n      background-color: #98072f; }\n    button.btn__accent--shiraz:hover {\n      background-color: #c8093d; }\n  button.btn__accent--fountain-blue {\n    background-color: #53b8b4;\n    border-color: #3f9995;\n    color: #2c2e31; }\n    button.btn__accent--fountain-blue:active {\n      background-color: #47aba7; }\n    button.btn__accent--fountain-blue:hover {\n      background-color: #65bfbc; }\n  button.btn__accent--viridian-green {\n    background-color: #009999;\n    border-color: #006666;\n    color: #fff; }\n    button.btn__accent--viridian-green:active {\n      background-color: teal; }\n    button.btn__accent--viridian-green:hover {\n      background-color: #00b3b3; }\n  button.btn__accent--atoll {\n    background-color: #036d83;\n    border-color: #024451;\n    color: #fff; }\n    button.btn__accent--atoll:active {\n      background-color: #02586a; }\n    button.btn__accent--atoll:hover {\n      background-color: #04829c; }\n  button.btn__accent--midnight-blue {\n    background-color: #373a65;\n    border-color: #252744;\n    color: #fff; }\n    button.btn__accent--midnight-blue:active {\n      background-color: #2e3154; }\n    button.btn__accent--midnight-blue:hover {\n      background-color: #404376; }\n  button.btn__accent--pink {\n    background-color: #e37086;\n    border-color: #db4562;\n    color: #2c2e31; }\n    button.btn__accent--pink:active {\n      background-color: #df5b74; }\n    button.btn__accent--pink:hover {\n      background-color: #e78598; }\n  button.btn__accent--lilac {\n    background-color: #c688c5;\n    border-color: #b566b4;\n    color: #2c2e31; }\n    button.btn__accent--lilac:active {\n      background-color: #be77bd; }\n    button.btn__accent--lilac:hover {\n      background-color: #ce99cd; }\n  button.btn__accent--purple {\n    background-color: #6c4290;\n    border-color: #52326d;\n    color: #fff; }\n    button.btn__accent--purple:active {\n      background-color: #5f3a7f; }\n    button.btn__accent--purple:hover {\n      background-color: #794aa1; }\n  button.btn__accent--turquoise {\n    background-color: #60b9cb;\n    border-color: #3da6bb;\n    color: #2c2e31; }\n    button.btn__accent--turquoise:active {\n      background-color: #4db1c5; }\n    button.btn__accent--turquoise:hover {\n      background-color: #73c1d1; }\n  button.btn__accent--glacier {\n    background-color: #8bc7cb;\n    border-color: #68b6bb;\n    color: #2c2e31; }\n    button.btn__accent--glacier:active {\n      background-color: #79bfc3; }\n    button.btn__accent--glacier:hover {\n      background-color: #9dd0d3; }\n  button.btn__accent--dark-green {\n    background-color: #5c9068;\n    border-color: #487152;\n    color: #fff; }\n    button.btn__accent--dark-green:active {\n      background-color: #52805d; }\n    button.btn__accent--dark-green:hover {\n      background-color: #679e74; }\n  button.btn__accent--light-green {\n    background-color: #5ba46c;\n    border-color: #498356;\n    color: #fff; }\n    button.btn__accent--light-green:active {\n      background-color: #529461; }\n    button.btn__accent--light-green:hover {\n      background-color: #6bad7b; }\n  button.btn__accent--gold {\n    background-color: #dda441;\n    border-color: #c78c24;\n    color: #2c2e31; }\n    button.btn__accent--gold:active {\n      background-color: #d99a2b; }\n    button.btn__accent--gold:hover {\n      background-color: #e1ae57; }\n  button.btn__accent--orange {\n    background-color: #f9a411;\n    border-color: #d28705;\n    color: #2c2e31; }\n    button.btn__accent--orange:active {\n      background-color: #eb9706; }\n    button.btn__accent--orange:hover {\n      background-color: #faae2a; }\n  button.btn__accent--yellow {\n    background-color: #dfc24f;\n    border-color: #d4b127;\n    color: #2c2e31; }\n    button.btn__accent--yellow:active {\n      background-color: #dbbb39; }\n    button.btn__accent--yellow:hover {\n      background-color: #e3c965; }\n  button.btn__accent--light-brown {\n    background-color: #a38854;\n    border-color: #816c43;\n    color: #fff; }\n    button.btn__accent--light-brown:active {\n      background-color: #927a4b; }\n    button.btn__accent--light-brown:hover {\n      background-color: #ae9462; }\n  button.btn__accent--dark-brown {\n    background-color: #655237;\n    border-color: #443725;\n    color: #fff; }\n    button.btn__accent--dark-brown:active {\n      background-color: #54452e; }\n    button.btn__accent--dark-brown:hover {\n      background-color: #765f40; }\n  button.btn__accent--title-text {\n    background-color: #4c4f53;\n    border-color: #343638;\n    color: #fff; }\n    button.btn__accent--title-text:active {\n      background-color: #404246; }\n    button.btn__accent--title-text:hover {\n      background-color: #585c60; }\n  button.btn__accent--default-text {\n    background-color: #7e7e81;\n    border-color: #656567;\n    color: #fff; }\n    button.btn__accent--default-text:active {\n      background-color: #717174; }\n    button.btn__accent--default-text:hover {\n      background-color: #8b8b8e; }\n  button.btn__accent--subtitles {\n    background-color: #aaaab1;\n    border-color: #8f8f99;\n    color: #2c2e31; }\n    button.btn__accent--subtitles:active {\n      background-color: #9d9da5; }\n    button.btn__accent--subtitles:hover {\n      background-color: #b7b7bd; }\n  button.btn__accent--borders {\n    background-color: #dbe0e5;\n    border-color: #bdc7d0;\n    color: #2c2e31; }\n    button.btn__accent--borders:active {\n      background-color: #ccd3da; }\n    button.btn__accent--borders:hover {\n      background-color: #eaedf0; }\n  button.btn__accent--toolbars {\n    background-color: #e9ecee;\n    border-color: #ccd3d8;\n    color: #2c2e31; }\n    button.btn__accent--toolbars:active {\n      background-color: #dbe0e3; }\n    button.btn__accent--toolbars:hover {\n      background-color: #f7f8f9; }\n  button.btn__accent--selected {\n    background-color: #e2ecef;\n    border-color: #c1d6dd;\n    color: #2c2e31; }\n    button.btn__accent--selected:active {\n      background-color: #d2e1e6; }\n    button.btn__accent--selected:hover {\n      background-color: #f2f7f8; }\n  button.btn__accent--page-master {\n    background-color: #ffffff;\n    border-color: #e6e6e6;\n    color: #2c2e31; }\n    button.btn__accent--page-master:active {\n      background-color: #f2f2f2; }\n    button.btn__accent--page-master:hover {\n      background-color: white; }\n  button.btn__accent--grey-1 {\n    background-color: #2c2e31;\n    border-color: #141516;\n    color: #fff; }\n    button.btn__accent--grey-1:active {\n      background-color: #202124; }\n    button.btn__accent--grey-1:hover {\n      background-color: #383b3e; }\n  button.btn__accent--grey-2 {\n    background-color: #373737;\n    border-color: #1e1e1e;\n    color: #fff; }\n    button.btn__accent--grey-2:active {\n      background-color: #2a2a2a; }\n    button.btn__accent--grey-2:hover {\n      background-color: #444444; }\n  button.btn__accent--grey-3 {\n    background-color: #808080;\n    border-color: #676767;\n    color: #2c2e31; }\n    button.btn__accent--grey-3:active {\n      background-color: #737373; }\n    button.btn__accent--grey-3:hover {\n      background-color: #8d8d8d; }\n  button.btn__accent--grey-4 {\n    background-color: #bdbdbd;\n    border-color: #a4a4a4;\n    color: #2c2e31; }\n    button.btn__accent--grey-4:active {\n      background-color: #b0b0b0; }\n    button.btn__accent--grey-4:hover {\n      background-color: #cacaca; }\n  button.btn__accent--grey-5 {\n    background-color: #dfdede;\n    border-color: #c6c4c4;\n    color: #2c2e31; }\n    button.btn__accent--grey-5:active {\n      background-color: #d2d1d1; }\n    button.btn__accent--grey-5:hover {\n      background-color: #ecebeb; }\n  button.btn__size--large {\n    height: 36px; }"; }
}

export { TagButton };