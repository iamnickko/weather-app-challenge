import PageTitle from "./PageTitle";

const AuthForm = () => {
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
              placeholder="Your Name"
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
