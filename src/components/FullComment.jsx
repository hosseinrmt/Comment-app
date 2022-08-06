const FullComment = () => {
  return (
    <div className=" bg-white w-80 mx-auto p-3 mb-4 flex-col flex text-justify justify-between gap-2 flex-wrap rounded-lg md:w-[45rem]">
      <h2 className="font-bold text-2xl">Full Comment</h2>
      <div className="bg-blue-200 p-4 rounded-md">
        <p className="font-semibold text-lg">name</p>
        <p className="font-semibold text-lg mb-4">email</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
          ducimus? Numquam iure aperiam labore molestiae recusandae! Alias totam
          aliquid vero, autem accusamus voluptatem consequatur voluptatum nobis
          laudantium atque facilis quaerat?
        </p>
      </div>
    </div>
  );
};

export default FullComment;
