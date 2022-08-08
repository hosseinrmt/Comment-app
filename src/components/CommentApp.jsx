import { useEffect, useState } from "react";
import Comments from "./Comments";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios from "axios";

const CommentApp = () => {
  const [comments, setComments] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/comments455")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${selectedId}`)
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== selectedId));
        setSelectedId(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderComments = () => {
    let renderValue = <p>Loading...</p>;

    if (error) renderValue = <p>fetching data failed !</p>;

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

      <FullComment selectedId={selectedId} deleteHandler={deleteHandler} />
      <NewComment setComments={setComments} />
    </div>
  );
};

export default CommentApp;
