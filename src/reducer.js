export const initialState = {
  basket: [],
  user: null
}


export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + Number(item.price), 0)



const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    // add case
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }

    // removing case
    case 'REMOVE_FROM_BASKET':

      const checkID = (basketItem) => basketItem.id === action.id

      const index = state.basket.findIndex(checkID)

      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Can't remove product (id : ${action.id}).
        It is not in the basket`);
      }

      return {
        ...state,
        basket: newBasket
      }

    // user logged in state
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }
    // default case

    default:
      return state
  }
}

export default reducer