import axios from "axios";

//action type
const GET_CART = "GET_CART";
const CREATE_CART = "CREATE_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";

// initial state
const defaultCart = {};

/* res.data[0] from the getCart route
{
  "totalPrice": 43.66,
  "id": 5,
  "isPaid": false,
  "createdAt": "2020-08-09T15:38:14.097Z",
  "updatedAt": "2020-08-09T15:38:14.097Z",
  "userId": 2,
  "products": []
}
*/

// action creator
const getCart = (cart) => ({ type: GET_CART, cart });
const createCart = (cart) => ({ type: CREATE_CART, cart });
const addToCart = (cart) => ({ type: ADD_TO_CART, cart });
const deleteFromCart = (cart) => ({ type: DELETE_FROM_CART, cart });

// getCart thunk
export const getCartThunk = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/orders/cart/${userId}`);
    console.log(res.data);
    dispatch(getCart(res.data) || defaultCart);
  } catch (err) {
    console.error(err);
  }
};

//createCart Thunk
export const createCartThunk = (userId) => async (dispatch) => {
  try {
    const res = await axios.post("/api/orders", { userId: userId });
    dispatch(createCart(res.data) || defaultCart);
  } catch (err) {
    console.error(err);
  }
};

//addToCart Thunk
export const addToCartThunk = (orderId, productId, quantity) => async (
  dispatch
) => {
  try {
    const res = await axios.put(`/api/orders/${orderId}`, {
      productId,
      quantity,
    });
    console.log("console log res from add To cart thunk", res.data);
    dispatch(addToCart(res.data) || defaultCart);
  } catch (err) {
    console.error(err);
  }
};

export const deleteFromCartThunk = (orderId, productId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/orders/${orderId}`, { productId });
    console.log("res from deleteFromCartThunk", res.data);
    dispatch(deleteFromCart(res.data) || defaultCart);
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
      return action.cart;
    case DELETE_FROM_CART:
      return action.cart;
    default:
      return state;
  }
}
