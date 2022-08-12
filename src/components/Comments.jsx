const Comments = ({ id, name, email, comment, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        key={id}
        className="flex flex-col flex-1 p-3 rounded-md bg-white cursor-pointer"
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
