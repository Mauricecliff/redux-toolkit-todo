import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos = {
        id: nanoid(),
        todo: action.payload,
      };
      state.todos.push(todos);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? action.payload : todo
      );
    },

    fetchFromStorage: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, fetchFromStorage } =
  todoSlice.actions;

export default todoSlice.reducer;
