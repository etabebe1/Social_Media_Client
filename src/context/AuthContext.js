import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user: null,
//   isFetching: false,
//   error: false,
// };

//* For test purposes for the Initial State on using AuthContext upon login*/
/*// TODO: here after the user has login, user data should be stored in LOCAL-STORAGE  //*/

const INITIAL_STATE = {
  user: {
    _id: "65250b8fc436fa61becdc210",
    username: "Jeremiah A.",
    email: "jeremiah@gmail.com",
    profile: "/profile/image.jpg",
    coverPicture: "",
    followers: ["652518ae1c2341b38a8a3770", "6525196a1c2341b38a8a3776"],
    following: ["652518ae1c2341b38a8a3770", "6525196a1c2341b38a8a3776"],
    isAdmin: true,
  },
  isFetching: false,
  error: false,
};

// const INITIAL_STATE = {
//   user: {
//     _id: "652518ae1c2341b38a8a3770",
//     username: "Naol",
//     email: "naol@gmail.com",
//     password: "$2b$10$SbEJm/bU1zbKiqiPjXfV0.DOYQE62z2IX8QYXP3MBTMqWue7ClDWy",
//     profile: "",
//     coverPicture: "",
//     followers: ["6525196a1c2341b38a8a3776", "65250b8fc436fa61becdc210"],
//     following: ["65250b8fc436fa61becdc210", "6525196a1c2341b38a8a3776"],
//     isAdmin: true,
//     createdAt: "2023-10-10T09:26:06.189Z",
//     updatedAt: "2023-10-10T09:45:50.328Z",
//     __v: 0,
//     city: "Addis Ababa",
//     description: "Trust me I know what I'm doing.",
//     from: "Ethiopia",
//     relation: 2,
//   },

//   isFetching: false,
//   error: false,
// };

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
