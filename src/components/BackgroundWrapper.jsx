const BackgroundWrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url("src/assets/hongkong.jpg")`,
        height: "900px",
        opacity: "85%",
      }}
      className="container img-fluid text-center backgroundWrapper"
    >
      {children}
    </div>
  );
};
export default BackgroundWrapper;
