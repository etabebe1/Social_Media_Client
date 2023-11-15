import Arrow from "./arrow2.png";
import "./LoginForm.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import LinearProgress from "@mui/material/LinearProgress";

// import CircularProgress from '@mui/material/CircularProgress';

function LoginForm() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLogin = (evt) => {
    evt.preventDefault();

    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };


  return (
    <div>
      <div className="formContainer flex justify-center items-center p-10 gap-6 bg-gray-100 before:animate-pulse duration-1000">
        <div className="VibeVerse  w-1/2">
          <h1 className="text_shadow  text-5xl font-semibold text-gray-800">
            VibeVerse
          </h1>
          <hr className="mb-8.6 mt-3 " />
          <p className="text-gray-800 text-lg">
            Welcome to our revolutionary social media platform! Join a dynamic
            community of individual who are passionate about connecting, sharing
            and inspiring. With our cutting-edge feature and intuitive
            interface, express yourself has never been easier.
          </p>
          <div className="sign-up flex my-4  items-center gap-3">
            <span className="text_span uppercase">
              Don't have account? Sign up now
            </span>
            <a href="/signup">
              <img
                src={Arrow}
                className="w-8 h-8 rounded-full hover:cursor-pointer hover:transform hover:translate-x-2 duration-200"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="animate-form-container">
          <div className="bg-purple-500 w-14 h-14 rounded-full absolute top-11.5  lg:right-14.5 md:right-13.5 mix-blend-multiply blur-xl opacity-30 animate-blob"></div>
          <div className="bg-yellow-500 w-14 h-14 rounded-full absolute top-11.5 lg:right-11.8 md:right-11 mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="bg-pink-500 w-14 h-14 rounded-full absolute top-13 lg:right-13 md:right-12 mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-5000"></div>

          {/* from here */}

          <form
            className="login_form dark:bg-blackMore flex justify-center items-center"
            onSubmit={handleLogin}
          >
            <div className="formItemAll flex flex-col gap-1  w-1/2">
              <div className="main_form   ">
                <div className="brand flex justify-center ">
                  <a
                    href="www.vibeverse.com"
                    className="font-semibold text-3xl text-gray-700 text-shadow tracking-wider"
                  >
                    VibeVerse
                  </a>
                </div>
                <div className="form_item my-7.6  w-full">
                  <input
                    ref={email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    minLength="3"
                    required
                    className="pl-3 text-gray-900  outline-none border-b-2 placeholder-gray-700 w-full "
                  />
                </div>
                <div className="form_item my-7.6  ">
                  <input
                    required
                    minLength="6"
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="pl-3  text-gray-900  outline-none border-b-2 placeholder-gray-700 w-full "
                  />
                </div>
              </div>

              {/* login button */}
              <div className="form_submit flex justify-center items-center flex-col gap-3 ">
                <button
                  type="submit"
                  disabled={isFetching}
                  className="loginBtn bg-emerald-200  rounded-md w-3/4 text-emerald-600 font-semibold text_shadow_1 hover:bg-emerald-300 hover:text-emerald-700 duration-500 "
                >
                  {isFetching ? (
                    <LinearProgress
                      color="success"
                      className="w-full"
                    ></LinearProgress>
                  ) : (
                    "Log In"
                  )}
                </button>

                <span className="text-sm text-red-500 hover:text-red-700">
                  <a href="forgetPassword">Forgot Password?</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
