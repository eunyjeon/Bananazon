import axios from "axios";

//action type
const GET_CART = "GET_CART";
const CREATE_CART = "CREATE_CART";
const ADD_TO_CART = "ADD_TO_CART";

// initial state
const defaultCart = {
  orderId,
  products: [],
};

// action creator
const getCart = (cart) => ({ type: GET_CART }, cart);
const createCart = (cart) => ({ type: CREATE_CART }, cart);
const addToCart = (product) => ({ type: ADD_TO_CART, product });

// getCart thunk
export const getCartThunk = (userId) => async (dispatch) => {
  try {
    const res = await axios.get("/api/orders", userId);
    dispatch(getCart(res.data));
  } catch (err) {
    console.error(err);
  }
};

//createCart Thunk
export const createCartThunk = (userId) => async (dispatch) => {
  try {
    const res = await axios.post("/api/orders", userId);
    dispatch(createCart(res.data) || defaultCart);
  } catch (err) {
    console.error(err);
  }
};

//addToCart Thunk
export const addToCartThunk = (orderId, productId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/orders/${orderId}`, productId);
  } catch (err) {
    console.error(err);
  }
};

// reducer
export default function cartReducer(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case CREATE_CART:
      return action.cart;
    case ADD_TO_CART:
      return { ...state, products: [...products, action.product] };
    default:
      return state;
  }
}
