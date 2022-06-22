import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/taskCreator';
import { TaskTable } from './components/taskTable';
import { VisibilityControl } from './components/visibilityControl';
import { Container } from './components/container';
import { Head } from './components/header/head';

function App() {

  const [taskItems, setTasksItems] = useState([]);
  const [showComplete, setShowComplete] = useState(false);
  const [counter, setCounter] = useState(0);

  //Create a new task
  function createNewTask(taskName) {
    if (!taskItems.find(item => item.name === taskName)) {
      setTasksItems([...taskItems, { name: taskName, done: false }]);

      setCounter(counter + 1);
    }
  }

  //Head Status
  const otro = (taskStatus) => {
    if (!taskItems.find(item => item.done === taskStatus)) {
      setCounter(counter - 1);
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      taskItems.map((t) => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }

  //Clear done task
  const clearTask = () => {
    setTasksItems(taskItems.filter(task => !task.done))
    setShowComplete(false)
  }

  //Gets the data from the Local Storage save earlier
  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTasksItems(JSON.parse(data));
    }

    let counterData = localStorage.getItem('active-task')
    if (counterData) {
      setCounter(JSON.parse(counterData))
    }
  }, [])

  //Local Storage for new Tasks
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems)) //Save the task
    localStorage.setItem('active-task', JSON.stringify(counter)) //Save the active-tasks
  }, [taskItems, counter])

  return (
    <main className="bg-dark vh-100 text-white">
      <Head counter={counter} />
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable
          task={taskItems}
          toggleTask={toggleTask}
        />

        <VisibilityControl
          isChecked={showComplete}
          setShowComplete={(checked) => setShowComplete(checked)}
          cleanTask={clearTask}
        />

        {showComplete === true && (
          <TaskTable
            task={taskItems}
            toggleTask={toggleTask}
            showComplete={showComplete}
          />
        )}
      </Container>
    </main >
  );
}

export default App;
