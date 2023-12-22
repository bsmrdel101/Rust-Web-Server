import TaskList from "@/components/TaskList";
import Layout from "../components/Layout";
import { getTasks } from "@/scripts/controllers/tasksController";


interface Props {
  tasks: Task[]
}

export async function getServerSideProps() {
  const tasks = await getTasks();
  return { props: { tasks: tasks } };
}

export default function Index({ tasks }: Props) {
  return (
    <Layout>
      <h1>Todo List</h1>
      <TaskList tasks={tasks} />
    </Layout>
  );
}
