const initialState = {
  number: 0,
};

export const counterReducers = (state = initialState.number, action) => {
  switch (action.type) {
    case "INCRECE":
      return state + 1;

    case "DECRECE":
      return state - 1;

    default:
      return state;
  }
};
