import { MdFlag } from "react-icons/md";

import { Todos } from "./todoList";
import { IoClose } from "react-icons/io5";

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
  const handleUpdateTodo = (e: any) => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    const priority = e.target.elements.priority.value;
    const category = e.target.elements.category.value;

    const updatedTodo = {
      todoId: todo.todoId,
      title: title,
      description: description,
      priority: priority,
      category: category,
      completed: todo.completed,
    };

    updateTodo(todo.todoId, updatedTodo);
    openTodoCard([]);
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 bg-[rgba(0,0,0,0.4)] w-full h-full z-10"
        onClick={() => openTodoCard([])}
      ></div>
      <form
        onSubmit={handleUpdateTodo}
        className="max-w-[520px]  px-5 py-10 mx-auto gap-2 flex-col rounded-[8px] flex w-[355px] md:w-[430px] top-[50%] left-[50%] shadow-lg z-50 absolute bg-white animate-cardOpen  -translate-x-1/2 -translate-y-1/2"
      >
        <button
          type="button"
          className="text-end self-end  "
          onClick={() => openTodoCard([])}
        >
          <IoClose
            className="text-gray-700 mb-5 w-5 h-5 absolute top-2 right-2"
            // onClick={setCardOpen(todoId)}
          />
        </button>

        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title..."
            defaultValue={todo.title}
            className="w-full border-2 rounded-[4px]"
          />
        </label>
        <label htmlFor="description">
          <textarea
            name="description"
            id="description"
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
            id="priority"
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
            id="category"
            className="bg-slate-100 text-primary rounded-[2px] p-1 font-medium cursor-pointer w-full"
            defaultValue={todo.category}
          >
            <option value="">Category </option>
            <option value="study">Study</option>
            <option value="development">Personal Development</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="w-full flex gap-5 mt-5">
          <button
            type="button"
            className={`p-2 w-full rounded-[4px]bg-slate-100 bg-red-500 hover:bg-red-400 text-white duration-200 rounded-[4px]`}
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
