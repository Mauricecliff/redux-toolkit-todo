/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "./ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { deleteTodo } from "@/store/features/todo/todoSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className="my-3 px-3 py-3 bg-orange-300 flex justify-between rounded-md gap-3">
      <p className="p-2 rounded-lg bg-amber-900 text-white text-sm">
        {todo && todo.todo}
      </p>
      <div>
        <Button className="bg-yellow-700">
          <Pencil1Icon />
        </Button>
        <Button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-[crimson] ml-2"
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
}

export default Todo;
