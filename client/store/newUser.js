import axios from 'axios';
import history from '../history';

const CREATE_USER = 'CREATE USER';

const allUser = [];

const createUser = (user) => ({ type: CREATE_USER, user });

export const createUserThunk = (email, password, firstName, lastName) => async (
  dispatch
) => {
  try {
    const { data } = await axios.post(`/api/users`, {
      email,
      password,
      firstName,
      lastName,
    });
    dispatch(createUser(data || {}));
    history.push(`/users/${data.id}`);
  } catch (error) {
    console.error(error);
  }
};

export default function (state = allUser, action) {
  switch (action.type) {
    case CREATE_USER:
      return [...allUser, action.user];
    default:
      return state;
  }
}
