/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DemoProfileStore {
    componentDidLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield fetch("http://localhost:5050/Home/GetProfile");
            const viewModel = yield resp.json();
            this.st = viewModel;
        });
    }
    payProfileChangeHandler(event) {
        this.st = event.detail;
    }
    render() {
        return h("tag-pay-profile-final", { vm: this.st });
    }
    static get is() { return "demo-profile-store"; }
    static get properties() { return { "st": { "state": true } }; }
    static get style() { return ""; }
}

export { DemoProfileStore };
