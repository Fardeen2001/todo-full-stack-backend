import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
} from "../controller/todo-controller.js";
const route = express.Router();
route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleTodoDone);
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
