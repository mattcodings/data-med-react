import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";

const Login = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Form method="post" className="card">
        <h4 className="text-center text-2xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <SubmitButton text="Submit" />
        <p className="text-center mt-5">
          No account yet?{" "}
          <Link to="/register" className="link link-hover link-primary">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default Login;
