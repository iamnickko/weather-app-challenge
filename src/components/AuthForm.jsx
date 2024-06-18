import { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import { loginAuthForm, registerAuthForm } from "../utils/auth.service";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [success, setSuccess] = useState("");
  const [displayError, setDisplayError] = useState("");

  useEffect(() => {
    if (formInput.email && formInput.password) {
      setBtnDisabled(false);
    }
  }, [formInput.email, formInput.password]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateAuthForm(formInput);
    if (!errors.email && !errors.password) {
      try {
        if (mode === "Register") {
          await registerAuthForm(formInput);
          setSuccess("Submission Success");
          navigate("/login");
          setFormInput({ email: "", password: "" });
        }
        if (mode === "Login") {
          await loginAuthForm(formInput);
          navigate("/savedLocations");
          setIsLoggedIn(true);
        }
      } catch (error) {
        setDisplayError(error.message);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateAuthForm = ({ email, password }) => {
    setFormErrors({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const newFormErrors = { ...formErrors };
    newFormErrors.email = emailRegex.test(email) ? "" : "Email is invalid.";
    newFormErrors.password = passwordRegex.test(password)
      ? ""
      : "Password must contain at least one lowercase letter, one capital letter, one number, one special character, and be between 8-15 characters long.";
    return newFormErrors;
  };

  return (
    <div className="row justify-content-center">
      <div className="col-7">
        <PageTitle title={`${mode}`} />
        <form onSubmit={handleFormSubmit} className="mb-5">
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
            {mode}
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
