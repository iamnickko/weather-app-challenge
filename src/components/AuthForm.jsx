import { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import { submitAuthForm } from "../utils/auth.service";

const AuthForm = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [success, setSuccess] = useState("");
  const [displayError, setDisplayError] = useState("");

  useEffect(() => {
    if (formInput.name && formInput.email && formInput.password) {
      setBtnDisabled(false);
    }
  }, [formInput.name, formInput.email, formInput.password]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSignUpForm(formInput);
    if (!errors.name && !errors.email && !errors.password) {
      try {
        await submitAuthForm(formInput);
        setSuccess("Submission Success!");
      } catch (error) {
        setDisplayError(error.message);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateSignUpForm = ({ name, email, password }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const newFormErrors = { ...formErrors };
    newFormErrors.name = name.length > 1 ? "" : "Name is invalid.";
    newFormErrors.email = emailRegex.test(email) ? "" : "Email is invalid.";
    newFormErrors.password = passwordRegex.test(password)
      ? ""
      : "Password must contain at least one lowercase letter, one capital letter, one number, one special character, and be between 8-15 characters long.";
    return newFormErrors;
  };

  return (
    <div className="row justify-content-center">
      <div className="col-7">
        <PageTitle title={"Register / Login"} />
        <form onSubmit={handleFormSubmit} className="mb-5" action="">
          <div className="mb-3">
            <input
              className="form-control mb-1"
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              onChange={(e) =>
                setFormInput({ ...formInput, name: e.target.value })
              }
              value={formInput.name}
            />
            {formErrors.name && (
              <div className="alert alert-danger" role="alert">
                {formErrors.name}
              </div>
            )}
          </div>
          <div className="mb-3">
            <input
              className="form-control mb-1"
              type="email"
              name="email"
              id="email"
              placeholder="email@domain.com"
              onChange={(e) =>
                setFormInput({ ...formInput, email: e.target.value })
              }
              value={formInput.email}
              required
            />
            {formErrors.email && (
              <div className="alert alert-danger" role="alert">
                {formErrors.email}
              </div>
            )}
          </div>
          <div className="mb-3">
            <input
              className="form-control mb-1"
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
            {formErrors.password && (
              <div className="alert alert-danger" role="alert">
                {formErrors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-3"
            disabled={btnDisabled}
          >
            Register / Login
          </button>
          {success && (
            <div className="alert alert-success" role="alert">
              {success}
            </div>
          )}
          {!formErrors && displayError && (
            <div className="alert alert-danger" role="alert">
              {displayError}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default AuthForm;
