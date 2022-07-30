const IntailState = {
  products:[],
  cartItems: [],
  cartTotalAmount: 0,
};



const CounterReducer = (state = IntailState, action) => {
  switch (action.type) {
    case "STORE":{
      var data = action.payload
      return {
        ...state,
        products: data
      }
    }
    case "INCREMENT": {
      var cItems = [...state.cartItems]
      const itemIndex = cItems.findIndex(
        item => item.id === action.payload.id
      );
      // console.log(itemIndex)
      if (itemIndex >= 0) {
        cItems[itemIndex].cartTotalQuantity ++;
      } else {
        const tempProduct = { ...action.payload, cartTotalQuantity: 1 }
        cItems.push(tempProduct);
      }
      return {
        ...state,
        cartItems: [...cItems]
      }
    }
    case "DECREMENT":

      return
    case "RESET":

      return
    default: {
      return state;
    }
  }
};
export default CounterReducer;