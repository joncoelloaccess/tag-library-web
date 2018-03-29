/*! Built with http://stenciljs.com */
const { h } = window.TagLibrary;

class TagDatepicker {
    componentWillLoad() {
        this.inputId = `${this.id}DatePickerInput`;
    }
    componentDidLoad() {
        const $dp = $(`#${this.inputId}`);
        $dp.kendoDatePicker();
        this.datepicker = $dp.data("kendoDatePicker");
    }
    handleClick() {
        this.datepicker.open();
    }
    render() {
        const sty = {
            width: "100%"
        };
        const { inputId, label } = this;
        return (h("div", { class: "form-group" },
            label ? (h("label", { htmlFor: inputId },
                h("tag-text", { type: "h5" }, label))) : null,
            h("input", { id: inputId, class: "form-control decorated-input", placeholder: this.placeholder, "k-ng-model": "dateObject", style: sty, onClick: () => this.handleClick() })));
    }
    static get is() { return "tag-datepicker"; }
    static get properties() { return { "componentWillLoad": { "method": true }, "datepicker": { "state": true }, "id": { "type": String, "attr": "id" }, "inputId": { "state": true }, "label": { "type": String, "attr": "label" }, "placeholder": { "type": String, "attr": "placeholder" }, "visible": { "state": true } }; }
}
/*
$("#datepicker").kendoDatePicker({
  format: "dd/MM/yyyy"
});
var datepicker = $("#datepicker").data("kendoDatePicker");

function openCalendar() {
  datepicker.open();
}

$("#timepicker").kendoTimePicker({});
var timepicker = $("#timepicker").data("kendoTimePicker");

function openTimeDropdown() {
  timepicker.open();
}

$("#dateTimePicker").kendoDateTimePicker({});
//var timepicker = $("#timepicker").data("kendoDateTimePicker");

//function openTimeDropdown() {
//    timepicker.open();
//}


*/

class TagFormGroup {
    render() {
        const { label, placeholder, value } = this;
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: "exampleInputEmail1" },
                h("tag-text", { type: "h5" }, label)),
            h("input", { type: "text", class: "form-control", id: "exampleInputEmail1", placeholder: placeholder, value: value })));
    }
    static get is() { return "tag-form-group"; }
    static get properties() { return { "label": { "type": String, "attr": "label" }, "placeholder": { "type": String, "attr": "placeholder" }, "value": { "type": String, "attr": "value" } }; }
    static get style() { return ""; }
}

class TagFormGroupSelect {
    render() {
        const { label } = this;
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: "exampleInputEmail1" },
                h("tag-text", { type: "h5" }, label)),
            h("select", { class: "custom-select" },
                h("option", null, "Just one"))));
    }
    static get is() { return "tag-form-group-select"; }
    static get properties() { return { "label": { "type": String, "attr": "label" } }; }
    static get style() { return ""; }
}

class TagPayProfileFinal {
    test(e) {
        console.log("change event", e);
    }
    workingPatternWeekChangeHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        const wp = {
            workingPattern: event.detail
        };
        this.payProfileChange.emit(Object.assign({}, this.vm, wp));
    }
    render() {
        const { vm } = this;
        if (!vm) {
            return null;
        }
        return [
            h("tag-main-header", null,
                h("tag-text", { type: "h2", inline: true }, "My Details")),
            h("tag-three-col-layout", null,
                h("tag-card", { class: "tall" },
                    h("tag-profile", { name: vm.name, gender: vm.gender, dob: vm.dob, nationality: vm.nationality, src: vm.profileSrc }),
                    h("tag-form-group", { label: "Known as", value: vm.preferedName })),
                h("tag-card-header", { class: "tall", heading: "Contact information" },
                    h("tag-form-group", { label: "Address line 1", value: vm.addressline1 }),
                    h("tag-form-group", { label: "Town", value: vm.town }),
                    h("tag-form-group", { label: "County", value: vm.county }),
                    h("tag-form-group", { label: "Postcode", value: vm.postcode }),
                    h("tag-form-group", { label: "Email address", value: vm.emailAddress }),
                    h("tag-form-group", { label: "Mobile", value: vm.mobile }),
                    h("tag-form-group", { label: "Landline", value: vm.landline })),
                h("tag-card-header", { heading: "Emergancy contact" },
                    h("tag-form-group", { label: "Name" }),
                    h("tag-form-group-select", { label: "Relationship" }),
                    h("tag-form-group", { label: "Mobile" })),
                h("tag-card-header", { heading: "Working patterns" },
                    h("tag-datepicker", { id: "effectiveFromDate", label: "Effective from", class: "wp__date" }),
                    h("tag-datepicker", { id: "effectiveToDate", label: "Effective to", class: "wp__date" }),
                    h("tag-pay-working-pattern", null)))
        ];
    }
    static get is() { return "tag-pay-profile-final"; }
    static get properties() { return { "vm": { "type": "Any", "attr": "vm" } }; }
    static get events() { return [{ "name": "payProfileChange", "method": "payProfileChange", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return ":host {\n  display: block;\n  width: 100%;\n  box-sizing: border-box; }\n\n.pp__tall {\n  grid-row-end: span 2; }"; }
}

class TagPayWorkingPattern {
    render() {
        return (h("div", null,
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Monday" }),
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Tuesday" }),
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Wednesday" }),
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Thursday" }),
            h("tag-pay-wp", { class: "tpwp__pattern", dayofweek: "Friday" })));
    }
    static get is() { return "tag-pay-working-pattern"; }
    static get style() { return ".tpwp__pattern {\n  margin-right: 10px; }"; }
}

export { TagDatepicker, TagFormGroup, TagFormGroupSelect, TagPayProfileFinal, TagPayWorkingPattern };
