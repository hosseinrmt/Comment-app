const NewComment = () => {
  return (
    <div className=" bg-white w-80 mx-auto p-3 mb-4 flex-col flex text-justify justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
      <h2 className="font-bold text-2xl">Add a comment</h2>
      <div className="bg-blue-200 p-4 flex flex-col gap-y-2 rounded-md">
        <label className="font-semibold text-lg">name</label>
        <input
          type="text"
          className="px-3 py-2 rounded-md"
          placeholder="your name..."
        />

        <label className="font-semibold text-lg">email</label>
        <input
          type="email"
          className="px-3 py-2 rounded-md"
          placeholder="your email..."
        />

        <label className="font-semibold text-lg">comment</label>
        <textarea
          placeholder="write your comment..."
          name="body"
          rows="3"
          className="px-3 py-2 rounded-md mb-6"
        ></textarea>

        <button
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
