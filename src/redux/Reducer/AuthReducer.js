import {
  LOGIN_USER_FETCH_ID_SUCCESS,
  USER_FETCH_ID_SUCCESS,
  USER_FETCH_SUCCESS,
  USER_FETCH_ROLE_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
} from "../Constants/Constants";

let initState = {
  users: [],
  teamLeader: [],
  getAllUsers: {},
  user_by_id: {},
};

const userAuthReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          users: [...state.users.users, action.payload],
        },
      };
    case USER_FETCH_SUCCESS:
      return {
        users: action.payload,
      };
    case USER_FETCH_ROLE_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case USER_FETCH_ID_SUCCESS:
      return {
        ...state,
        user_by_id: action.payload,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        profile_user: action.payload,
      };

    case LOGIN_USER_FETCH_ID_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
      };

    default:
      return state;
  }
};
export default userAuthReducer;
