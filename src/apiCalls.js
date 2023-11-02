import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    const response = await axios.post(
      "http://localhost:8800/api/authentication/login",
      userCredentials
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

//* Not necessarily */
// export const signupCall = async (userProvidedCredentials, dispatch) => {
//   dispatch({ type: "SIGNUP_START" });

//   try {
//     const response = await axios.post(
//       "localhost:8800/api/authentication/register",
//       userProvidedCredentials
//     );
// dispatch({type: ""})

//   } catch (error) {}
// };
