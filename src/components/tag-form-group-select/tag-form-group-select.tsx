import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-form-group-select",
  styleUrl: "tag-form-group-select.scss"
})
export class TagFormGroupSelect {
  @Prop() label: string;
  render() {
    const { label } = this;
    return (
      <div class="form-group">
        <label htmlFor="exampleInputEmail1">
          <tag-text type="h5">{label}</tag-text>
        </label>
        <select class="custom-select">
          <option>Just one</option>
        </select>
      </div>
    );
  }
}
