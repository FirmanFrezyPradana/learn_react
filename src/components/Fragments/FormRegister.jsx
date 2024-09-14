import InputForm from "../Elements/Input";
import Button from"../Elements/Button";
export const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        name="fullname"
        title="Fullname"
        placeholder="insert your fullname here..."
        type="text"
      />
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
         <InputForm
        name="confirmpassword"
        title="Confirm Password"
        placeholder="*****"
        type="password"
      />
      <Button classname="bg-green-500 w-full">Register</Button>
    </form>
  );
};
