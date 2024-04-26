import { useEffect } from "react";
import { AddTodo, Todo } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromStorage } from "@/store/features/todo/todoSlice";

function Todos() {
  let todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // const [aTodos, setATodos] = useState([]);
  // todos = aTodos;

  //once component mount fetch todo if available
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("reduxTodos"));
    if (todos && todos.length > 0) {
      dispatch(fetchFromStorage(todos));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //once todo change in state add to local storage
  useEffect(() => {
    localStorage.setItem("reduxTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="">
      <div className="flex justify-center gap-2 mt-2 my-3">
        <AddTodo />
      </div>
      <div className="flex justify-center">
        {todos && todos.length > 0 ? (
          <div className="w-1/2 ">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>
        ) : (
          <p className="text-[orange]">sorry no more todos...</p>
        )}
      </div>
    </div>
  );
}

export default Todos;
