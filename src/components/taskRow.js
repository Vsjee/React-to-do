export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr key={task.name}>
      <td className='d-flex justify-content-between align-items-center'>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task)
          }}
        />
      </td>
    </tr>
  )
}