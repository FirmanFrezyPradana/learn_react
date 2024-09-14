import React from "react";
import { AuthLayout } from "../components/Layout/AuthLayout";
import { FormLogin } from "../components/Fragments/FormLogin";
export const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};
