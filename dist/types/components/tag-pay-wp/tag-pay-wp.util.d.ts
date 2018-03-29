export declare enum PayWpStates {
    none = "none",
    halfDay = "half-day",
    fullDay = "full-day",
}
export declare type PayWpState = {
    value: PayWpStates;
};
export interface PayWp {
    transition: () => PayWp;
    value: PayWpState;
}
export declare type PayWpFactory = (initialState: PayWpStates) => PayWp;
export declare const payWpFactory: PayWpFactory;
