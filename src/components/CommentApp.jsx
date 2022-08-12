import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Comments from "./Comments";
import FullComment from "./FullComment";
import getComments from "../services/getAllCommentsService";
import NewComment from "./NewComment";

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
        <Comments
          key={comment.id}
          comment={comment.body}
          name={comment.name}
          email={comment.email}
          onClick={() => selectCommentHandler(comment.id)}
        />
      ));
    }

    return renderValue;
  };

  return (
    <div className="bg-slate-300 w-auot h-auto container mx-auto p-8">
      <section className="bg-white w-80 mx-auto p-2 mb-4  flex-col flex justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
        <h2 className="font-bold text-2xl">comments</h2>
        {renderComments()}
      </section>

      <FullComment
        setSelectedId={setSelectedId}
        selectedId={selectedId}
        setComments={setComments}
        comments={comments}
      />
    </div>
  );
};

export default CommentApp;
