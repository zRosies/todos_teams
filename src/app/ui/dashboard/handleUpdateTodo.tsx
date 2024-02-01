import { MdFlag } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { Todos } from "./todoList";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HandleUpdateTodo = ({
  // userId,
  openTodoCard,
  todo,
  deleteTodo,
  updateTodo,
}: {
  openTodoCard: any;
  todo: Todos;
  deleteTodo: any;
  updateTodo: any;
}) => {
  console.log(todo);

  const handleUpdateTodo = (e: any) => {
    e.preventDefault();
    console.log("teste");

    const title = e.target[0].value;
    const description = e.target[1].value;
    const priority = e.target[2].value;
    const category = e.target[3].value;

    const updatedTodo = {
      todoId: todo.todoId,
      title: title,
      description: description,
      priority: priority,
      category: category,
      completed: todo.completed,
    };

    // console.log(updatedTodo);

    updateTodo(todo.todoId, updatedTodo);
    openTodoCard([]);
  };

  return (
    <>
      <div
        className="absolute left-0 top-0 bg-[rgba(0,0,0,0.4)] w-full h-full z-10"
        onClick={() => openTodoCard([])}
      ></div>
      <form
        onSubmit={handleUpdateTodo}
        className="max-w-[400px] px-5 py-5 mx-auto gap-2 flex-col rounded-[8px] flex w-[320px] md:w-[430px] top-[50%] left-[50%] shadow-lg z-50 absolute bg-white animate-cardOpen  -translate-x-1/2 -translate-y-1/2"
      >
        <button
          type="button"
          className="text-end self-end"
          onClick={() => openTodoCard([])}
        >
          <IoMdCloseCircleOutline
            className="text-gray-500 mb-5 w-8 h-8"
            // onClick={setCardOpen(todoId)}
          />
        </button>

        <label htmlFor="title">
          <input
            type="text"
            name="description"
            id="title"
            placeholder="Title..."
            defaultValue={todo.title}
            className="w-full border-2 rounded-[4px]"
          />
        </label>
        <label htmlFor="description">
          <textarea
            name="description"
            id="title"
            placeholder="Description..."
            className="w-full border-2 rounded-[4px] h-[8rem]"
            defaultValue={todo.description}
          />
        </label>

        <div className="flex flex-col gap-2 relative">
          <span className="absolute right-6 top-[0.32rem]">
            <MdFlag className="text-white" />
          </span>
          <select
            name="priority"
            id="priority "
            className=" bg-primary text-white w-full rounded-[4px] p-1 cursor-pointer "
            defaultValue={todo.priority}
          >
            <option value="none">Priority</option>
            <option value="p1">P1</option>
            <option value="p2">P2</option>
            <option value="p3">P3</option>
          </select>
          <select
            name="category"
            id="category  "
            className="bg-slate-100 text-primary rounded-[2px] p-1 font-medium cursor-pointer w-full"
            defaultValue={todo.category}
          >
            <option value="">Category </option>
            <option value="study">Study</option>
            <option value="">Personal Development</option>
          </select>
        </div>

        <div className="w-full flex gap-5 mt-5">
          <button
            type="button"
            className={`p-2 w-full rounded-[4px]bg-slate-100 bg-red-300 hover:bg-red-200 duration-200`}
            onClick={() => {
              deleteTodo(todo.todoId), openTodoCard([]);
            }}
          >
            Remove
          </button>

          <button
            className="bg-hover text-white w-full p-2 rounded-[4px] hover:bg-primary duration-200"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default HandleUpdateTodo;
