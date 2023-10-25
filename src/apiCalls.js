import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    const response = await axios.post(
      "http://localhost:8800/api/authentication/login"
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.data });
  }
};

// export const loginCall = async (userCredentials, dispatch) => {
//   dispatch({ type: "LOGIN_START" });

//   try {
//     const response = await fetch("/authentication/login", userCredentials).then(
//       (res) => {
//         return res.json();
//       }
//     ).then(data=> );
//   } catch (error) {}
// };
