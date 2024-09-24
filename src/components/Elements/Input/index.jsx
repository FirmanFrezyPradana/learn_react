import React, { forwardRef } from "react";
import Input from "./input";
import Label from "./label";

const InputForm = forwardRef((props, ref) => {
  const { htmlFor, name, placeholder, type, title } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor} >{title}</Label>
      <Input name={name} placeholder={placeholder} type={type} ref={ref} />
    </div>
  );
});

export default InputForm;
