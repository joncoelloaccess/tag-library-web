import { Component } from "@stencil/core";

@Component({
  tag: "tag-pay-working-pattern",
  styleUrl: "tag-pay-working-pattern.scss"
})
export class TagPayWorkingPattern {
  render() {
    return (
      <div>
        <tag-pay-wp class="tpwp__pattern" dayofweek="Monday" />
        <tag-pay-wp class="tpwp__pattern" dayofweek="Tuesday" />
        <tag-pay-wp class="tpwp__pattern" dayofweek="Wednesday" />
        <tag-pay-wp class="tpwp__pattern" dayofweek="Thursday" />
        <tag-pay-wp class="tpwp__pattern" dayofweek="Friday" />
      </div>
    );
  }
}
