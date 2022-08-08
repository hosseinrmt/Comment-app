import axios from "axios";
import { useState } from "react";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({ name: "", email: "", body: "" });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = () => {
    if (comment.name && comment.email && comment.body) {
      axios
        .post("http://localhost:3001/comments", { ...comment, postId: 2 })
        .then((res) => axios.get("http://localhost:3001/comments"))
        .then((res) => setComments(res.data));

      setComment({ name: "", email: "", body: "" });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className=" bg-white w-80 mx-auto p-3 mb-4 flex-col flex text-justify justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
      <h2 className="font-bold text-2xl">Add a comment</h2>
      <div className="bg-blue-200 p-4 flex flex-col gap-y-2 rounded-md">
        <label className="font-semibold text-lg">name</label>
        <input
          onChange={changeHandler}
          value={comment.name}
          name="name"
          type="text"
          className="px-3 py-2 rounded-md"
          placeholder="your name..."
        />

        <label className="font-semibold text-lg">email</label>
        <input
          onChange={changeHandler}
          value={comment.email}
          name="email"
          type="email"
          className="px-3 py-2 rounded-md"
          placeholder="your email..."
        />

        <label className="font-semibold text-lg">comment</label>
        <textarea
          value={comment.body}
          onChange={changeHandler}
          placeholder="write your comment..."
          name="body"
          rows="3"
          className="px-3 py-2 rounded-md mb-6"
        ></textarea>

        <button
          onClick={(e) => postCommentHandler(e, comment, setComment)}
          type="submit"
          className="bg-blue-600 rounded-md h-12 text-white text-lg font-semibold hover:bg-blue-500"
        >
          POST YOUR COMMENT
        </button>
      </div>
    </div>
  );
};

export default NewComment;
