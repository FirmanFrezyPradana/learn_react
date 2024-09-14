import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
export const FormLogin = () => {
  const HandleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/producs";
  };
  return (
    <form onSubmit={HandleLogin}>
      <InputForm
        name="email"
        title="Email"
        placeholder="example@gmail.com"
        type="email"
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
    </form>
  );
};
