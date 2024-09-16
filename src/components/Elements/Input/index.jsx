import React, { forwardRef } from "react";
import Input from "./input";
import Label from "./label";
// lama sebelum mengguankan userEF
// const InputForm = (props) => {
//   const { htmlFor, name, placeholder, type, title, ref } = props;
//   return (
//     <div className="mb-6">
//       <Label htmlFor={htmlFor}>{title}</Label>
//       <Input
//         name={name}
//         placeholder={placeholder}
//         type={type}
//         ref={ref}
//       ></Input>
//     </div>
//   );
// };
const InputForm = forwardRef((props,ref) => {
  const { htmlFor, name, placeholder, type, title } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{title}</Label>
      <Input name={name} placeholder={placeholder} type={type} ref={ref} />
    </div>
  );
});

export default InputForm;
