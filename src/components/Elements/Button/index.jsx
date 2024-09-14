import React from "react";
const Button = (props) => {
  const { children, type, onClick, classname = "bg-black" } = props;
  return (
    <button
      className={`h-8 font-bold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
