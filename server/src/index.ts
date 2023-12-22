import express, { Express, Request, Response } from "express";
import tasksRouter from './routes/tasks.router';
import cors from 'cors';

const app: Express = express();
const port = 8080;

app.use(cors());

//Routes
app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('=======================');
});
