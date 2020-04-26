const INITIAL_STATE = {
  testProps: null,
};

export const testReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        testProps: action.payload,
      };

    default:
      return state;
  }
};
