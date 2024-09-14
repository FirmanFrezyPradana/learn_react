import React from "react";
import { AuthLayout } from "../components/Layout/AuthLayout";
import { FormRegister } from "../components/Fragments/FormRegister";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};
