import '../../stencil.core';
export declare class TagDatepicker {
    /**
     * The placeholder text used for the input
     */
    placeholder: string;
    /**
     * The id of the element used for generating internal ids
     */
    id: string;
    label: string;
    visible: boolean;
    datepicker: any;
    inputId: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleClick(): void;
    render(): JSX.Element;
}
