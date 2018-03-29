// declare var $: any;
export class TagKendoFormGroupSelect {
    componentDidLoad() {
        // var data: any[] = [
        //   { text: "Black", value: "1" },
        //   { text: "Orange", value: "2" },
        //   { text: "Grey", value: "3" }
        // ];
        // // create DropDownList from input HTML element
        // $("#color").kendoDropDownList({
        //   dataTextField: "text",
        //   dataValueField: "value",
        //   dataSource: data,
        //   index: 0
        //   // change: onChange
        // });
    }
    render() {
        const { label } = this;
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: "exampleInputEmail1" },
                h("tag-text", { type: "h5" }, label)),
            h("select", { id: "color" })));
    }
    static get is() { return "tag-kendo-form-group-select"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "label": { "type": String, "attr": "label" } }; }
    static get style() { return "/**style-placeholder:tag-kendo-form-group-select:**/"; }
}
