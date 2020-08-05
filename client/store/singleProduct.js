import axios from 'axios'
//
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
//
const getSingleProduct = (product) => ({
  type: GET_SINGLE_PRODUCT,
  product
})
// THUNX
export const getSingleProductThunk = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(getSingleProduct(data))
    } catch (error) {
      console.error(error)
    }
  }
}
//
const initialState = {}
//
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
