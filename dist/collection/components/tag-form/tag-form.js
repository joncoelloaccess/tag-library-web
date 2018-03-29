export class TagFormGroup {
    render() {
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: "exampleInputEmail1" }, "Email address"),
            h("input", { type: "email", class: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp", placeholder: "Enter email" }),
            h("small", { id: "emailHelp", class: "form-text text-muted" }, "We'll never share your email with anyone else.")));
    }
    static get is() { return "tag-form"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:tag-form:**/"; }
}
