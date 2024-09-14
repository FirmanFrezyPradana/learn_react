import React from "react";
import Input from "./input";
import Label from "./label";
const InputForm = (props) => {
  const { htmlFor, name, placeholder, type, title } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{title}</Label>
      <Input name={name} placeholder={placeholder} type={type}></Input>
    </div>
  );
};

export default InputForm;
