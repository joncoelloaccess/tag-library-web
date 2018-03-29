import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
import { WorkingPatternWeek } from "../tag-pay-working-pattern/tag-pay-working-pattern.utils";
export interface IVM {
    name: string;
    gender: string;
    dob: string;
    nationality: string;
    profileSrc: string;
    preferedName: string;
    addressline1: string;
    town: string;
    county: string;
    postcode: string;
    emailAddress: string;
    mobile: string;
    landline: string;
    emergancyContactName: string;
    relationship: string;
    emergancyContactMobile: string;
    workingPattern: WorkingPatternWeek;
}
export declare class TagPayProfileFinal {
    /** Property description */
    vm: IVM;
    payProfileChange: EventEmitter;
    test(e: any): void;
    workingPatternWeekChangeHandler(event: CustomEvent): void;
    render(): JSX.Element;
}
