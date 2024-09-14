import React from "react";
import { AuthLayout } from "../components/Layout/AuthLayout";
import { FormLogin } from "../components/Fragments/FormLogin";
export const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
      {/* <p className="text-sm mt-5 text-center">
        Have an account?
        <Link to="/" className="mx-3 font-bold text-green-500">
          Login
        </Link>
      </p> */}
    </AuthLayout>
  );
};
