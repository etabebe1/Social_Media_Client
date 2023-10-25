import { Link } from "react-router-dom";
import Arrow from "./arrow2.png";
import "./RegisterForm.css";

function RegisterForm() {
  return (
    <div>
      <div className="formContainer flex justify-center items-center p-10 gap-6 bg-gray-100 before:animate-pulse duration-1000">
        <div className="TalkTime  w-1/2">
          <h1 className="text_shadow  text-5xl font-semibold text-gray-800">
            Talk Time
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
              Already have an account? Login in
            </span>
            <a href="/Login">
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

          {/* From here */}
          <form className="dark:bg-blackMore flex justify-center items-center">
            <div className="formItemAll flex flex-col gap-1  w-1/2">
              <div className="main_form   ">
                <div className="brand flex justify-center ">
                  <a
                    href="www.talktime.com"
                    className="font-semibold text-3xl text-gray-700 text-shadow tracking-wider"
                  >
                    Talk Time
                  </a>
                </div>
                <div className="form_item my-7.6  w-full">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    min="3"
                    className="pl-3 bg-transparent text-gray-900  outline-none border-b-2 placeholder-gray-700 w-full"
                  />
                </div>
                <div className="form_item my-7.6  w-full">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    min="3"
                    className="pl-3 bg-transparent text-gray-900  outline-none border-b-2 placeholder-gray-700 w-full"
                  />
                </div>
                <div className="form_item my-7.6  ">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="pl-3 bg-transparent text-gray-900  outline-none border-b-2 placeholder-gray-700 w-full"
                  />
                </div>
                <div className="form_item my-7.6  ">
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    className="pl-3 bg-transparent text-gray-900  outline-none border-b-2 placeholder-gray-700 w-full"
                  />
                </div>
              </div>

              {/* submit button */}
              <div className="form_submit">
                <div className="loading"></div>
                <button
                  className="btn bg-orange-200 px-5 rounded-md text-orange-600 font-semibold text_shadow_1 hover:bg-orange-300 hover:text-orange-700 duration-500"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
