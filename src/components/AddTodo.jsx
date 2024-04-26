import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/features/todo/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!todo) return;
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <>
      <div>
        <Input onChange={(e) => setTodo(e.target.value)} value={todo} />
      </div>
      <div>
        <Button className="bg-teal-400 border-0" onClick={addTodoHandler}>
          AddTodo
          <PlusIcon className="ml-2" />
        </Button>
      </div>
    </>
  );
}

export default AddTodo;
