import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode"

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
  const [isDarkMode, setIsDartMode] = useContext(DarkMode);
  return (
    <div className={`flex justify-center text-xl min-h-screen items-center item-center ${isDarkMode && 'bg-gray-600'}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-green-600 p-2 text-white rounded-lg" onClick={() => setIsDartMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-green-500">{title}</h1>
        <p className={`text-slate-500 ${isDarkMode && 'text-white'}`}>Welcome, please enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};
