import React, { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode"
const Label = (props) => {
  const { htmlFor, children } = props;
  const [isDarkMode, setIsDartMode] = useContext(DarkMode);
  return (
    <label
      htmlFor={htmlFor} className={` block text-slate-700 text-sm font-bold mb-2 ${isDarkMode && 'text-neutral-100'}`}
    >
      {children}
    </label>
  );
};

export default Label;
