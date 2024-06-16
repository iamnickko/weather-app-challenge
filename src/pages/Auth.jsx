import AuthForm from "../components/AuthForm";

const Auth = ({ mode, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="container">
      <AuthForm
        mode={mode}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};
export default Auth;
