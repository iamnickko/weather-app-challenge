import { useState } from "react";
import PageTitle from "./PageTitle";
import { submitAuthForm } from "../utils/authHelper";

const AuthForm = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [btnDisabled, setBtnDisabled] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitAuthForm(formInput);
    setFormInput({ name: "", email: "", password: "" });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-7">
        <PageTitle title={"Register / Login"} />
        <form onSubmit={handleFormSubmit} className="mb-5" action="">
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              onChange={(e) =>
                setFormInput({ ...formInput, name: e.target.value })
              }
              value={formInput.name}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="email@domain.com"
              required
              onChange={(e) =>
                setFormInput({ ...formInput, email: e.target.value })
              }
              value={formInput.email}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              onChange={(e) =>
                setFormInput({ ...formInput, password: e.target.value })
              }
              value={formInput.password}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            // disabled={btnDisabled}
          >
            Register / Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default AuthForm;
