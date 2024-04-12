import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";

const Register = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Form method="POST" className="card w-96 p-8">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />

        <SubmitButton text="Register" />

        <p className="text-center mt-5">
          Have an account?{" "}
          <Link to="/login" className="link link-hover link-primary">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default Register;
