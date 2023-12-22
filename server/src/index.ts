import express, { Express, Request, Response } from "express";
import tasksRouter from './routes/tasks.router';

const app: Express = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

//Routes
app.use('/api/tasks', tasksRouter);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('=======================');
});
