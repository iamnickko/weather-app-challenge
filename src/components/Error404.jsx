import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="my-5 text-center ">
        <h1 className="fs-1 ">Error 404</h1>
      </div>
      <div className="my-5 text-center">
        <h3>
          Oh no! You seem have travelled a little <em>too</em> far off the
          beaten track!
        </h3>
        <Link to="/">Let's send you back</Link>
      </div>
    </>
  );
};
export default Error404;
