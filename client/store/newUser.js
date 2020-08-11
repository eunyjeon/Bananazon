import axios from 'axios';
import history from '../history';

const CREATE_USER = 'CREATE USER';

/**
 * INITIAL STATE
 */
const allUser = [];

export const createUserThunk = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/users`, user);
    dispatch(createUser(data || {}));
    history.push(`/users/${data.id}`);
  } catch (error) {
    console.error(error);
  }
};

// can I do this ???
export default function createUserReducer (state = allUser, action) {
  switch (action.type) {
    case CREATE_USER:
      return [...allUser, action.user]
    default:
      return state
  }
}
