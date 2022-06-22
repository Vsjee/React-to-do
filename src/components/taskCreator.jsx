import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {

  const [newTaskValue, setNewTaskValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskValue);
    setNewTaskValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='my-4 row'>
      <div className='col-10'>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskValue}
          onChange={(event) => setNewTaskValue(event.target.value)}
          className='form-control'
        />
      </div>
      <div className='col-2'>
        <button className='btn btn-primary btn-sn'>Add Task</button >
      </div>
    </form>
  );
}