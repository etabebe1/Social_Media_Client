import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

//* For test purposes for the Initial State on using AuthContext upon login*/
/*// TODO: here after the user has login, user data should be stored in LOCAL-STORAGE  //*/

// const INITIAL_STATE = {
//   user: {
//     _id: "65250b8fc436fa61becdc210",
//     username: "Jeremiah A.",
//     email: "jeremiah@gmail.com",
//     profile: "/profile/image.jpg",
//     coverPicture: "",
//     followers: ["652518ae1c2341b38a8a3770", "6525196a1c2341b38a8a3776"],
//     following: [
//       "652518ae1c2341b38a8a3770",
//       "6525196a1c2341b38a8a3776",
//       "654beb0ab10172a6aa277f88",
//     ],
//     isAdmin: true,
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
