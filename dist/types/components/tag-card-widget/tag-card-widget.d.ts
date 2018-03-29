import '../../stencil.core';
export declare class TagCardWidget {
    /**
     * The left border accent colour
     */
    accent: string;
    /**
     * The description of the text
     */
    description: string;
    /**
     * The value of text for the widget
     */
    value: string;
    /**
     * Text used for the button. ```buttontext``` or ```buttonicon``` must exist for button to appear.
     */
    buttontext: string;
    /**
     * Icon for the button. ```buttontext``` or ```buttonicon``` must exist for button to appear.
     */
    buttonicon: string;
    buttonclick: (e: Event) => void;
    /**
     * Application name
     */
    applicationname: string;
    /**
     * Application image. Either the image or icon is used, the image is used over the icon when both are used.
     */
    applicationimage: string;
    /**
     * Application icon. Either the image or icon is used, the image is used over the icon when both are used.
     */
    applicationicon: string;
    render(): JSX.Element;
}
