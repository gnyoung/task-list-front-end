import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const App = () => {
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);
  
  const updateTaskData = updatedTaskData => {
    const tasks = taskData.map(task => {
      if (task.id === updateTaskData.id) {
        return updatedTaskData;
      } else {
        return task;
      }
    });
    setTaskData(tasks);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={taskData} onUpdateTask={updateTaskData} /></div>
      </main>
    </div>
  );
};

export default App;
