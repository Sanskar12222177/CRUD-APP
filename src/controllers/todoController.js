import { Todo } from "../models/todoModels.js";

//create a Todo
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = await Todo.create({
      title,
      description,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//read a todo
//update
//delete

//create
// export const createTodo = () => {}
//read all
export const getTodo = () => {}
//read one
export const getTodoByID = () => {}
//delete
export const deleteTodo = () => {}
//update
export const updateTodo = () => {}
