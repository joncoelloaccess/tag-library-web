import { Component, Prop } from "@stencil/core";

// declare var $: any;

@Component({
  tag: "tag-kendo-form-group-select",
  styleUrl: "tag-kendo-form-group-select.scss",
  shadow: true
})
export class TagKendoFormGroupSelect {
  @Prop() label: string;
  componentDidLoad(): void {
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
    return (
      <div class="form-group">
        <label htmlFor="exampleInputEmail1">
          <tag-text type="h5">{label}</tag-text>
        </label>
        <select id="color" />
      </div>
    );
  }
}
