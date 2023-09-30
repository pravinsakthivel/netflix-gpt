import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="absolute p-6 bg-black bg-opacity-80 w-3/12 mx-auto right-0 left-0 my-36 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 my-2 w-full bg-gray-300 bg-opacity-40 rounded-xl"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="px-4 py-2 my-2 w-full bg-gray-300 bg-opacity-40 rounded-xl"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 my-2 w-full  bg-gray-300 bg-opacity-40 rounded-xl"
        ></input>
        <button className="py-2 my-2 bg-red-800 w-full rounded-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix Signup now"
            : "Already registered ? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
