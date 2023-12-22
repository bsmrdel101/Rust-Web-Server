import TaskList from "@/components/TaskList";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getTasks } from "@/scripts/controllers/tasksController";

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);
  

  return (
    <Layout>
      <h1>Todo List</h1>
      <TaskList tasks={tasks} />
    </Layout>
  );
}
