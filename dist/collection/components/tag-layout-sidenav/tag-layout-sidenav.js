export class TagLayoutSidenav {
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
    static get style() { return "/**style-placeholder:tag-layout-sidenav:**/"; }
}
