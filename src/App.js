import { useState, useEffect } from 'react';
import { TaskCreator } from './components/taskCreator';
import { TaskTable } from './components/taskTable';
import { VisibilityControl } from './components/visibilityControl';
import { Container } from './components/container';
import { Head } from './components/header/headBanner';

function App() {

  const [taskItems, setTasksItems] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  //Create a new task
  function createNewTask(taskName) {
    if (!taskItems.find(item => item.name === taskName)) {
      setTasksItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  //toggle
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
  }, [])

  //Local Storage for new Tasks
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems)) //Save the task
  }, [taskItems])

  return (
    <main className="vh-100 text-white">
      <Head taskItems={taskItems} />
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
          < TaskTable
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
