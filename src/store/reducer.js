import { ADD_CARD } from "./constants";

const initState = {
  cards: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [action.card],
      };
    default:
      return state;
  }
};

export default reducer;
