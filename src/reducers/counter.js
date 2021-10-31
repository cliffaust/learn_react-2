const initialState = {
  number: 0,
};

export const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case "INCRECE":
      return (state.number = 4);

    case "DECRECE":
      return (state.number = 2);

    default:
      return state.number;
  }
};
