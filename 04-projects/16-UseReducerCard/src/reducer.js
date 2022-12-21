const reducer = (state, action) => {
  if (action.type === "REMOVE_ALL") {
    return {
      ...state,
      cart: [],
      amount: 0,
      total: 0,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);

    const newAmount = newCart
      .map((item) => item.amount)
      .reduce((num, sum) => (num += sum), 0);

    const newTotal = newCart
      .map((item) => Number(item.price))
      .reduce((num, sum) => (num += sum), 0);

    return {
      ...state,
      cart: newCart,
      amount: newAmount,
      total: newTotal,
    };
  }

  if (action.type === "INCREASE") {
    const itemToChange = state.cart.find((item) => item.id === action.payload);
    const priceToChange = itemToChange.price / itemToChange.amount;
    const newCart = state.cart.map((item) =>
      item.id !== action.payload
        ? item
        : {
            ...item,
            amount: item.amount + 1,
            price: priceToChange * (item.amount + 1),
          }
    );

    const newAmount = newCart
      .map((item) => item.amount)
      .reduce((num, sum) => (num += sum), 0);

    const newTotal = newCart
      .map((item) => Number(item.price))
      .reduce((num, sum) => (num += sum), 0);
    return {
      ...state,
      cart: newCart,
      amount: newAmount,
      total: newTotal,
    };
  }

  if (action.type === "DECREASE") {
    const itemToChange = state.cart.find((item) => item.id === action.payload);
    const priceToChange = itemToChange.price / itemToChange.amount;
    console.log(priceToChange);
    const newCart =
      itemToChange.amount > 1
        ? state.cart.map((item) =>
            item.id !== action.payload
              ? item
              : {
                  ...itemToChange,
                  amount: itemToChange.amount - 1,
                  price: priceToChange * (item.amount - 1),
                }
          )
        : state.cart.filter((item) => item.id !== action.payload);

    const newAmount = newCart
      .map((item) => item.amount)
      .reduce((num, sum) => (num += sum), 0);

    const newTotal = newCart
      .map((item) => Number(item.price))
      .reduce((num, sum) => (num += sum), 0);
    return {
      ...state,
      cart: newCart,
      amount: newAmount,
      total: newTotal,
    };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, loading: false, cart: action.payload };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  return state;
};

export default reducer;
