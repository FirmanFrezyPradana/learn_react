import InputForm from "../Elements/Input";
import Button from"../Elements/Button";
export const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-green-500 w-full">Login</Button>
    </form>
  );
};
