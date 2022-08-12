import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>this page isn't exist</p>
      <Link to="/">Back to Home page ?</Link>
    </>
  );
};

export default NotFound;
