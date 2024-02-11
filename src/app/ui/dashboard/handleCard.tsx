"use client";
import { useState } from "react";
import { MdFlag } from "react-icons/md";

const HandleCard = ({
  userId,
  setCardOpen,
  setTodos,
  todos,
}: {
  userId: string;
  setCardOpen: any;
  todoId?: string;
  setTodos: Function;
  todos: any;
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

    setTodos([...todos, payload]);
    setCardOpen(false);
  };

  return (
    <>
      {/* <div
        className="absolute left-0 top-0 bg-[rgba(0,0,0,0.6)] w-full h-full z-20"
        // onClick={() => openCard(false)}
      ></div> */}
      <form
        className=" px-5 py-5  gap-2 flex-col rounded-[8px] max-w-[500px] w-ful flex left-[2rem] shadow-lg z-50 w-full bg-white animate-cardOpen my-6"
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
            className="w-full border-2 rounded-[4px] h-[7rem] border-none"
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
          <button
            type="button"
            className={`p-2 w-full rounded-[4px]bg-slate-100 hover:bg-slate-200 duration-200`}
            onClick={() => {
              setCardOpen(false);
            }}
          >
            Cancel
          </button>

          <button
            className="bg-hover text-white w-full p-2 rounded-[4px] hover:bg-primary duration-200"
            type="submit"
            // onClick={() => setSubmitted((prev: boolean) => !prev)}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default HandleCard;
