import '../../stencil.core';
import { PayWp, PayWpState } from "./tag-pay-wp.util";
export declare class TagPayWp {
    dayofweek: string;
    value: string;
    payWpMachine: PayWp;
    state: PayWpState;
    workingPattern: Map<string, any>;
    changeState(): void;
    render(): JSX.Element;
}
