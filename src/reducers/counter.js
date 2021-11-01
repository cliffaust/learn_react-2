const initialState = {
  num: "jun",
};

export const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case "INCRECE":
      return { ...state, num: "name" };

    case "DECRECE":
      return { ...state, num: "dan" };

    default:
      return state;
  }
};
