interface Props {
  tasks: Task[]
}

export default function TaskList({ tasks }: Props) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <p key={task.id}>{ task.name }</p>
      ))}
    </div>
  );
}
