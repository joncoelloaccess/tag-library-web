import '../../stencil.core';
export declare enum Size {
    default = "default",
    large = "large",
    small = "small",
    extraSmall = "extra-small",
}
export declare class TagButton {
    /** Colour of the button */
    accent: string;
    size: string;
    render(): JSX.Element;
}
