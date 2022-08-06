import { useEffect, useState } from "react";
import Comments from "./Comments";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios from "axios";

const CommentApp = () => {
  const [comments, setComments] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="bg-slate-300 w-auot h-auto container mx-auto p-8">
      <section className="bg-white w-80 mx-auto p-2 mb-4  flex-col flex justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
        <h2 className="font-bold text-2xl">comments</h2>
        {comments
          ? comments.map((comment) => (
              <Comments
                key={comment.id}
                comment={comment.body}
                name={comment.name}
                email={comment.email}
                onClick={() => selectCommentHandler(comment.id)}
              />
            ))
          : "loading..."}
      </section>

      <FullComment selectedId={selectedId} />
      <NewComment />
    </div>
  );
};

export default CommentApp;
