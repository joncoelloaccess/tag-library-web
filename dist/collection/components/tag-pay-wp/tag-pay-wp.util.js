export var PayWpStates;
(function (PayWpStates) {
    PayWpStates["none"] = "none";
    PayWpStates["halfDay"] = "half-day";
    PayWpStates["fullDay"] = "full-day";
})(PayWpStates || (PayWpStates = {}));
export const payWpFactory = initialState => {
    let internalState = initialState;
    const cycledValue = (val) => {
        if (val === PayWpStates.none)
            return PayWpStates.halfDay;
        if (val === PayWpStates.halfDay)
            return PayWpStates.fullDay;
        if (val === PayWpStates.fullDay)
            return PayWpStates.none;
    };
    const transition = () => {
        internalState = cycledValue(internalState);
        return {
            transition: transition,
            value: {
                value: internalState
            }
        };
    };
    return {
        transition: transition,
        value: {
            value: initialState
        }
    };
};
