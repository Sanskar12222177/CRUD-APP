import express from "express";
import {
    createTodo,
    getTodo,
    getTodoByID,
    updateTodo,
    deleteTodo,

} from "../controllers/todoController.js";
const router = express.Router();

router.post('/', createTodo);
router.get('/', getTodo);
router.get("/:id", getTodoByID);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
export default router;

