// import axios from 'axios';
// import history from '../history';

// const CREATE_USER = 'CREATE USER';

// const initialState = {
//   allUsers: [],
// };

// const createUser = (user) => ({ type: CREATE_USER, user });

// export const createUserThunk = (user) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(`/api/users`, user);
//     dispatch(createUser(data || {}));
//     history.push(`/users/${data.id}`);
//     // const { data } = await axios.post(`/api/users`, {
//     //   email,
//     //   password,
//     //   firstName,
//     //   lastName,
//     // });
//     // dispatch(createUser(data || {}));
//     // history.push('/products');
//     // history.push(`/users/${data.id}`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case CREATE_USER:
//       return { ...state, allUsers: [...state.allUsers, action.user] };
//     // return [...allUser, action.user];
//     default:
//       return state;
//   }
// }
