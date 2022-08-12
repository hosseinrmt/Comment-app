import { useState } from "react";
import addNewComment from "../services/addNewCommentService";
import { toast } from "react-toastify";

const NewComment = ({ history }) => {
  const [comment, setComment] = useState({ name: "", email: "", body: "" });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = () => {
    if (comment.name && comment.email && comment.body) {
      addNewComment({ ...comment, postId: 2 }).then((res) => {
        history.push("/");
        toast.success("Comment Added Successfully");
      });
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className=" bg-slate-300 w-80 mx-auto p-3 mb-4 flex-col flex text-justify justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
      <h2 className="font-bold text-2xl">Add a comment</h2>
      <div className=" p-4 flex flex-col gap-y-2 rounded-md">
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
