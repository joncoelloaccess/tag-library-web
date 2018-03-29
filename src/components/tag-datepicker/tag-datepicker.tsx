import { Component, Method, Prop, State } from "@stencil/core";

declare var $: any;

@Component({
  tag: "tag-datepicker"
})
export class TagDatepicker {
  /**
   * The placeholder text used for the input
   */
  @Prop() placeholder: string;
  /**
   * The id of the element used for generating internal ids
   */
  @Prop() id: string;
  @Prop() label: string;
  @State() visible: boolean;
  @State() datepicker: any;
  @State() inputId: string;
  @Method()
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
    return (
      <div class="form-group">
        {label ? (
          <label htmlFor={inputId}>
            <tag-text type="h5">{label}</tag-text>
          </label>
        ) : null}
        <input
          id={inputId}
          class="form-control decorated-input"
          placeholder={this.placeholder}
          k-ng-model="dateObject"
          style={sty}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
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
