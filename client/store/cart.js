import axios from 'axios';

//action type
const CREATE_CART = 'CREATE_CART';
const ADD_TO_CART = 'ADD_TO_CART';

// initial state
const defaultProducts = [];

// action creator
const createCart = (orderId) => ({ type: CREATE_CART }, orderId);
const addToCart = (products) => ({ type: ADD_TO_CART, products });

// thunk creator

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
export default function addToCartReducer(state, action) {}
