import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
// jika dalam sebuah file terdiri dari 2 export seperti auth service maka untuk pembuka wajib menggunakan { namaFunction}
import { Login } from "../../services/auth.services";
export const FormLogin = () => {
  const [loginFiled, setLoginFailed] = useState([]);
  const HandleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    Login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/producs";
      } else {
        setLoginFailed(res.response.data);
        window.location.href = "/";
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus(); // Fokus pada elemen input
  }, []);
  return (
    <form onSubmit={HandleLogin}>
      <InputForm
        name="username"
        title="Username"
        placeholder="Jhon Doe"
        type="username"
        ref={usernameRef}
      />
      <InputForm
        name="password"
        title="Password"
        placeholder="*****"
        type="password"
      />

      <Button classname="bg-green-500 w-full" type="submit">
        Login
      </Button>
      {loginFiled && (
        <p className="text-red-500 text-center font-light">{loginFiled}</p>
      )}
    </form>
  );
};
