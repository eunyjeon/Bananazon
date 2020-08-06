import axios from 'axios';
//
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
//
const getSingleProduct = (product) => ({
  type: GET_SINGLE_PRODUCT,
  product,
});
const updateQuantity = (product) => ({
  type: UPDATE_QUANTITY,
  product,
});
// THUNX
export const getSingleProductThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(getSingleProduct(data));
    } catch (error) {
      console.error(error);
    }
  };
};
export const increaseQuantity = (id) => async (dispatch) => {
  const { data } = await axios.put(`/api/products/${id}`);
  dispatch(updateQuantity(data));
};
export const decreaseQuantity = (id) => async (dispatch) => {
  const { data } = await axios.put(`/api/products/${id}`);
  dispatch(updateQuantity(data));
};
//
const initialState = {};
//
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product;
    case UPDATE_QUANTITY:
      return { ...state, product: action.product };
    default:
      return state;
  }
}
