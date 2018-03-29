import { Component, Listen, State } from "@stencil/core";

@Component({
  tag: "demo-profile-store",
  styleUrl: "demo-profile-store.scss"
})
export class DemoProfileStore {
  @State() st: any;
  async componentDidLoad(): Promise<void> {
    const resp: Response = await fetch("http://localhost:5050/Home/GetProfile");
    const viewModel: any = await resp.json();
    this.st = viewModel;
  }
  @Listen("payProfileChange")
  payProfileChangeHandler(event: CustomEvent): void {
    this.st = event.detail;
  }
  render(): JSX.Element {
    return <tag-pay-profile-final vm={this.st} />;
  }
}
