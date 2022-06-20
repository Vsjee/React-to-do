import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/taskCreator';
import { TaskTable } from './components/taskTable';
import { VisibilityControl } from './components/visibilityControl';
import { Container } from './components/container';

function App() {

  const [taskItems, setTasksItems] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  function createNewTask(taskName) {
    if (!taskItems.find(item => item.name === taskName)) {
      setTasksItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      taskItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, [])

  const clearTask = () => {
    setTasksItems(taskItems.filter(task => !task.done))
    setShowComplete(false)
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable task={taskItems} toggleTask={toggleTask} />

        <VisibilityControl isChecked={showComplete} setShowComplete={(checked) => setShowComplete(checked)} cleanTask={clearTask} />

        {
          showComplete === true && (
            <TaskTable task={taskItems} toggleTask={toggleTask} showComplete={showComplete} />
          )
        }
      </Container>
    </main >
  );
}

export default App;
