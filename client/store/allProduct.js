import axios from 'axios';

//action type
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

// initial state
const defaultProducts = [];

// action creator
const getAllProducts = (products) => ({ type: GET_ALL_PRODUCTS, products });

// thunk creator

export const allProductThunk = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products');
    dispatch(getAllProducts(res.data || defaultProducts));
  } catch (err) {
    console.error(err);
  }
};

// reducer
export default function allProductReducer(state = defaultProducts, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
