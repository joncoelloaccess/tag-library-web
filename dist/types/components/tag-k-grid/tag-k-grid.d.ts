import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class TagKGrid {
    ready: EventEmitter;
    parent: HTMLElement;
    config: object;
    componentWillLoad(): void;
    componentDidLoad(): void;
    init(config: object): void;
    render(): JSX.Element;
}
