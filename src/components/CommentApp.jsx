import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Comments from "./Comments";
import getComments from "../services/getAllCommentsService";
import { Link } from "react-router-dom";

const CommentApp = () => {
  const [comments, setComments] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getComments()
      .then((res) => setComments(res.data))
      .catch((err) => setError(true));
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const renderComments = () => {
    let renderValue = <p>Loading...</p>;

    if (error) {
      renderValue = <p>Something went wrong...</p>;
      toast.error("Something went wrong...");
    }

    if (comments && !error) {
      renderValue = comments.map((comment) => (
        <Link to={`/comment/${comment.id}`} key={comment.id}>
          <Comments
            comment={comment.body}
            name={comment.name}
            email={comment.email}
            onClick={() => selectCommentHandler(comment.id)}
          />
        </Link>
      ));
    }

    return renderValue;
  };

  return (
    <div className="container mx-auto p-8">
      <section className="bg-slate-300 w-80 mx-auto p-2 mb-4  flex-col flex justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
        <h2 className="font-bold text-2xl">comments</h2>
        {renderComments()}
      </section>
    </div>
  );
};

export default CommentApp;
