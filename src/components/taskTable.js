import { TaskRow } from "./taskRow";

export const TaskTable = ({ task, toggleTask, showComplete = false }) => {

  const taskTableRows = (doneValue) => {

    return (
      task
        .filter(task => task.done === doneValue)
        .map(task => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        ))
    )
  }

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {taskTableRows(showComplete)}
      </tbody>
    </table>
  )
}