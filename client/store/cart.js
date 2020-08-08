import axios from "axios";

//action type
const GET_CART = "GET_CART";
const CREATE_CART = "CREATE_CART";
const ADD_TO_CART = "ADD_TO_CART";

// initial state
const defaultCart = {};

// action creator
const getCart = (orderId) => ({ type: GET_CART }, orderId);
const createCart = (orderId) => ({ type: CREATE_CART }, orderId);
const addToCart = (orderId) => ({ type: ADD_TO_CART, orderId });

// thunk creator

// getCart thunk
export const getCartThunk = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/orders");
    dispatch(getCart(res.data || defaultCart));
  } catch (err) {
    console.error(err);
  }
};

// api/orders/:orderId
// export const addToCartThunk = (products) => async (dispatch) => {
//   try {
//     const res = await axios.put("/api/orders/:orderId", products);
//     dispatch(getAllProducts(res.data || defaultProducts));
//   } catch (err) {
//     console.error(err);
//   }
// };

// reducer
export default function addToCartReducer(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.orderId;
    case CREATE_CART:
      return action.orderId;
    case ADD_TO_CART:
      return action.orderId;
    default:
      return state;
  }
}
