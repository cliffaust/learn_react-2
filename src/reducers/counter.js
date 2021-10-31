const initialState = {
  number: 0,
};

export const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case "INCRECE":
      return state.number + 1;

    case "DECRECE":
      return state.number - 1;

    default:
      return state.number;
  }
};
