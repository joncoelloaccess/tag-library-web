import { render, flush } from "@stencil/core/testing";
import { DemoProfileStore } from "./demo-profile-store";

describe.skip("demo-profile-store", () => {
  it("should build", () => {
    expect(new DemoProfileStore()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [DemoProfileStore],
        html: "<demo-profile-store></demo-profile-store>"
      });
      console.log("@");
    });
    it("snapshot test", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});
