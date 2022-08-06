import { useEffect, useState } from "react";
import Comments from "./Comments";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios from "axios";

const CommentApp = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-slate-300 w-auot h-auto container mx-auto p-8">
      <section className="bg-white w-80 mx-auto p-2 mb-4  flex-col flex justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
        <h2 className="font-bold text-2xl">comments</h2>
        <Comments />
      </section>
      <FullComment />
      <NewComment />
    </div>
  );
};

export default CommentApp;
