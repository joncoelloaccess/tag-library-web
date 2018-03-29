export enum PayWpStates {
  none = "none",
  halfDay = "half-day",
  fullDay = "full-day"
}

export type PayWpState = {
  value: PayWpStates;
};

export interface PayWp {
  transition: () => PayWp;
  value: PayWpState;
}

export type PayWpFactory = (initialState: PayWpStates) => PayWp;

export const payWpFactory: PayWpFactory = initialState => {
  let internalState: PayWpStates = initialState;
  const cycledValue = (val: PayWpStates): PayWpStates => {
    if (val === PayWpStates.none) return PayWpStates.halfDay;
    if (val === PayWpStates.halfDay) return PayWpStates.fullDay;
    if (val === PayWpStates.fullDay) return PayWpStates.none;
  };
  const transition = (): PayWp => {
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
