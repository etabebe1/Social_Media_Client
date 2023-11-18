const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    // ...state --> copies all the initial state of a user
    // INITIAL_STATE: { } --> is a user object stored in the localStorage
    // INITIAL_STATE: { } --> it is also initialized as the user provides credentials through Login_Form
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };

    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (followingID) => followingID !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default AuthReducer;
