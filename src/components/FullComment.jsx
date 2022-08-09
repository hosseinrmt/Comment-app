import { useEffect, useState } from "react";
import deleteComment from "../services/deleteCommentSevice";
import getOneComment from "../services/getOneCommentSevice";

const FullComment = ({ setSelectedId, selectedId, comments, setComments }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (selectedId) {
      getOneComment(selectedId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [selectedId]);

  const deleteHandler = async () => {
    deleteComment(selectedId)
      .then((res) => {
        setComments(comments.filter((comment) => comment.id !== selectedId));
        setSelectedId(null);
      })
      .catch();
  };

  if (!selectedId)
    return (
      <p className="bg-white md:w-[45rem] w-80 mx-auto p-4 mb-4 rounded-md text-center text-lg">
        Selecet a comment to see full Detail...
      </p>
    );

  return (
    <div className=" bg-white w-80 mx-auto p-3 mb-4 flex-col flex text-justify justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
      <h2 className="font-bold text-2xl">Full Comment</h2>
      <div className="bg-blue-200 p-4 rounded-md">
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
    </div>
  );
};

export default FullComment;
