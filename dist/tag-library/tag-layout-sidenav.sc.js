/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagLayoutSidenav {
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
    render() {
        const { showMenu } = this;
        const itemsClass = showMenu
            ? "subnav__items subnav__items--show"
            : "subnav__items";
        return (h("nav", { class: "subnav" },
            h("div", { class: itemsClass },
                h("slot", null)),
            h("tag-icon-set", { onClick: this.toggleMenu.bind(this), class: "subnav__menu", icon: "Menu" })));
    }
    static get is() { return "tag-layout-sidenav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "showMenu": { "state": true } }; }
    static get style() { return "[data-tag-layout-sidenav-host] {\n  display: block;\n  border-bottom: 1px solid #dbe0e5; }\n\n.subnav[data-tag-layout-sidenav] {\n  position: relative; }\n  .subnav__menu[data-tag-layout-sidenav] {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    height: 28px;\n    width: 28px; }\n  .subnav__items[data-tag-layout-sidenav] {\n    visibility: hidden;\n    height: auto;\n    max-height: 45px;\n    overflow: none; }\n    .subnav__items--show[data-tag-layout-sidenav] {\n      max-height: 500px;\n      visibility: visible;\n      transition: max-height 150ms; }\n\n\@supports (display: grid) {\n  \@media screen and (min-width: 768px) {\n    [data-tag-layout-sidenav-host] {\n      border-right: 1px solid #dbe0e5;\n      border-bottom: none; }\n    nav[data-tag-layout-sidenav] {\n      width: 54px; }\n    .subnav__menu[data-tag-layout-sidenav] {\n      display: none; }\n    .subnav__items[data-tag-layout-sidenav] {\n      height: auto;\n      visibility: visible; } }\n  \@media screen and (min-width: 1024px) {\n    nav[data-tag-layout-sidenav] {\n      width: 220px; } } }"; }
}

export { TagLayoutSidenav };
