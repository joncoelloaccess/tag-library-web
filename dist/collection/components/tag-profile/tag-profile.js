export class TagProfile {
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
    static get style() { return "/**style-placeholder:tag-profile:**/"; }
}
