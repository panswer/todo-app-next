const ToDoFilter = () => {
  return (
    <section className="w-xs h-10 bg-blue-300 border rounded mt-3 flex justify-center items-center gap-2">
      <button className="capitalize hover:cursor-pointer" value={"all"}>
        all
      </button>
      <button className="capitalize hover:cursor-pointer" value={"active"}>
        active
      </button>
      <button className="capitalize hover:cursor-pointer" value={"completed"}>
        completed
      </button>
    </section>
  );
};

export default ToDoFilter;
