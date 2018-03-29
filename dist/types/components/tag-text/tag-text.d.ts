import '../../stencil.core';
export declare class TagText {
    /** The type of the string can be: h1, h2, h3, h4, h5, feature, small, min, value */
    type: string;
    /** Treat text as inline and remove block and margin from text */
    inline: boolean;
    render(): JSX.Element;
}
