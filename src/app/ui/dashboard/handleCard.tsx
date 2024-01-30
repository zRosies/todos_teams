import { MdFlag } from "react-icons/md";

const HandleTodoCard = ({
  buttonType,
  userId,
  setCardOpen,
}: {
  buttonType: string;
  userId: string;
  setCardOpen: any;
}) => {
  const handleAddTask = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const priority = e.target[2].value;
    const category = e.target[3].value;

    const payload = {
      todoId: crypto.randomUUID(),
      title: title,
      description: description,
      priority: priority,
      category: category,
      completed: false,
    };

    console.log(payload);

    const response = await fetch(`/api/todos/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response?.status === 201) {
      console.log("it worked");
      return;
    }
    console.log("Failed");
  };

  return (
    <>
      {/* <div
        className="absolute left-0 top-0 bg-[rgba(0,0,0,0.6)] w-full h-full z-0"
        onClick={() => openCard(false)}
      ></div> */}
      <form
        className="max-w-[400px] px-5 py-5 mx-auto gap-2 flex-col rounded-[8px] flex w-[320px] md:w-[430px] left-[2rem] shadow-lg z-50 absolute bg-white animate-cardOpen"
        onSubmit={handleAddTask}
      >
        <label htmlFor="title">
          <input
            type="text"
            name="description"
            id="title"
            placeholder="Title..."
            className="w-full border-2 rounded-[4px]"
          />
        </label>
        <label htmlFor="description">
          <textarea
            name="description"
            id="title"
            placeholder="Description..."
            className="w-full border-2 rounded-[4px]"
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
          >
            <option value="">Category </option>
            <option value="study">Study</option>
            <option value="">Personal Development</option>
          </select>
        </div>

        <div className="w-full flex gap-5 mt-5">
          {buttonType === "add" ? (
            <>
              <button
                type="button"
                className={`p-2 w-full rounded-[4px]bg-slate-100 hover:bg-slate-200 duration-200`}
                onClick={() => {
                  setCardOpen(false);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              type="button"
              className={`p-2 w-full rounded-[4px]bg-slate-100 bg-red-300 hover:bg-red-200 duration-200`}
            >
              Remove
            </button>
          )}
          <button className="bg-hover text-white w-full p-2 rounded-[4px] hover:bg-primary duration-200">
            {buttonType === "add" ? <span>Add</span> : <span>Update</span>}
          </button>
        </div>
      </form>
    </>
  );
};

export default HandleTodoCard;
