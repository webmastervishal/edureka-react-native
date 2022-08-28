const actions = {
  FETCH_CURRENCIES: "FETCH_CURRENCIES",
  fetchCurrencies: (payload) => {
    console.log("inside fetch curreinceis");

    //fetch data from api
    //dispatch store currencies action

    return async (dispatch) => {
      const result = await fetch(
        "https://webmaster-fake-api.herokuapp.com/currencies",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpc2hhbEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IndlYm1hc3RlciIsImlhdCI6MTY2MTY1NjUwMywiZXhwIjoxNjYxNzQyOTAzfQ.At4G8IhW8wOUcW6yokgxYN_n4el2wuza2y4XHAih4a0",
          },
        }
      );

      const data = await result.json();
      dispatch(actions.storeCurrencies(data));
    };
  },

  STORE_CURRENCIES: "STORE_CURRENCIES",
  storeCurrencies: (payload) => {
    return {
      type: actions.STORE_CURRENCIES,
      payload,
    };
  },
};

export default actions;
