const Comments = ({ key, name, email, comment, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        key={key}
        className="flex flex-col flex-1 p-3 rounded-md bg-blue-200 cursor-pointer"
      >
        <p className="mb-4">{comment}</p>
        <p>
          <span className="text-lg font-semibold">Name: </span> {name}
        </p>
        <p>
          <span className="text-lg font-semibold">Email: </span> {email}
        </p>
      </div>
    </>
  );
};

export default Comments;
