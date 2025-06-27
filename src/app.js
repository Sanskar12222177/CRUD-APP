import express from "express";
const app = express();
import todoRoutes from "./routes/todoRoutes.js"

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/todos', todoRoutes);
//http://localhost:8000/api/v1/todos

export default app;
