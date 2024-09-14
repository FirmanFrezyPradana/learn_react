import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?
        <Link to="/register" className="mx-3 font-bold text-green-500">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        <p className="text-sm mt-5 text-center">
          Have an account?
          <Link to="/" className="mx-3 font-bold text-green-500">
            Login
          </Link>
        </p>
      </p>
    );
  }
};
export const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className=" flex justify-center text-xl bg-white min-h-screen items-center ">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-green-500">{title}</h1>
        <p className=" text-slate-500">Welcome, please enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};
