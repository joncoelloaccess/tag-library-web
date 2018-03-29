export class TagDatepicker {
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
