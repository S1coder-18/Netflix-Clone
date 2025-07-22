import Header from "./Header";
import hero_img from "../assets/hero.jpg";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toogleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img src={hero_img} alt="" />
        </div>
        <div>
          <form className="w-4/12 absolute my-36 p-12 bg-black  max-w-sm mx-auto right-0 left-0 text-white rounded-md opacity-80 ">
            <h1 className="font-bold text-3xl py-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 my-4 w-full bg-gray-600 rounded-md  focus: outline-none focus:ring-red-600"
              />
            )}
            <input
              type="text"
              placeholder="Email or mobile number"
              className="p-4 my-4  w-full bg-gray-600 border-gray-600 rounded-md focus:outline-none focus:ring-red-600"
            />

            <input
              type="password"
              placeholder="Pasword"
              className="p-4 my-4 w-full bg-gray-600 border-gray-600 rounded-md focus:outline-none focus:ring-amber-500"
            />

            <button className="p-4 my-6 bg-red-600 rounded-md w-full ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toogleSignForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now."
                : "Already a user Sign In Now."}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
