import actions from "./action";

const initialState = {
  currencies: [],
};

const Reducer = (state = initialState, action) => {
  //const action = {type: '', payload}

  switch (action.type) {
    case actions.STORE_CURRENCIES:
      console.log("payload", action.payload);
      return {
        currencies: [...action.payload],
      };
    default:
      return state;
  }
};

export default Reducer;
