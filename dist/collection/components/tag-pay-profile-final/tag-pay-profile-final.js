export class TagPayProfileFinal {
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
    static get style() { return "/**style-placeholder:tag-pay-profile-final:**/"; }
}
