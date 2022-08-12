import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen flex items-center flex-col text-4xl">
      <p>this page isn't exist</p>
      <button className="ring-4 rounded-xl p-2 my-8">
        <Link to="/">Back to Home page ?</Link>
      </button>
    </div>
  );
};

export default NotFound;
