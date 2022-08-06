import { useEffect, useState } from "react";
import axios from "axios";

const FullComment = ({ selectedId }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (selectedId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${selectedId}`)
        .then((res) => setComment(res.data))
        .catch((err) => console.log(err));
    }
  }, [selectedId]);

  if (!selectedId)
    return (
      <p className="bg-white w-[45rem] mx-auto p-4 mb-4 rounded-md text-center text-lg">
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
      </div>
    </div>
  );
};

export default FullComment;
