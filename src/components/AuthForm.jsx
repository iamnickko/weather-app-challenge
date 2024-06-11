import { useState } from "react";
import PageTitle from "./PageTitle";

const AuthForm = () => {
  const [formInput, setFormInput] = useState({
    nameInput: "",
    emailInput: "",
    passwordInput: "",
  });

  return (
    <div className="row justify-content-center">
      <div className="col-7">
        <PageTitle title={"Register / Login"} />
        <form className="mb-5" action="">
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              onChange={(e) =>
                setFormInput({ ...formInput, nameInput: e.target.value })
              }
              value={formInput.nameInput}
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
                setFormInput({ ...formInput, emailInput: e.target.value })
              }
              value={formInput.emailInput}
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
                setFormInput({ ...formInput, passwordInput: e.target.value })
              }
              value={formInput.passwordInput}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register / Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default AuthForm;
