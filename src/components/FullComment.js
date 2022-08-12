import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deleteComment from "../services/deleteCommentSevice";
import getOneComment from "../services/getOneCommentSevice";

const FullComment = ({ match, history }) => {
  const [comment, setComment] = useState([]);
  const commentID = match.params.id;

  useEffect(() => {
    if (commentID) {
      getOneComment(commentID)
        .then((res) => setComment(res.data))
        .catch();

      <Link to="/comment/" />;
    }
  }, [commentID]);

  const deleteHandler = async () => {
    deleteComment(commentID).then((res) => {
      history.push("/");
    });
  };

  if (!commentID)
    return (
      <p className="bg-slate-300 md:w-[45rem] w-80 mx-auto p-4 mb-4 rounded-md text-center text-lg">
        Selecet a comment to see full Detail...
      </p>
    );

  return (
    <div className=" bg-slate-300 w-80 mx-auto p-3 mb-4 flex-col flex text-justify justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
      <h2 className="font-bold text-2xl">Full Comment</h2>
      <div className="bg-white p-4 rounded-md">
        <p className="font-semibold text-lg">Name: {comment.name}</p>
        <p className="font-semibold text-lg mb-4">Email: {comment.email}</p>
        <p>{comment.body}</p>
        <button
          onClick={deleteHandler}
          className="bg-white border-2 border-red-600 px-3 py-1 rounded-md mx-auto mt-4"
        >
          delete
        </button>
      </div>
      <Link className="m-3 " to="/">
        Back to Home?
      </Link>
    </div>
  );
};

export default FullComment;
