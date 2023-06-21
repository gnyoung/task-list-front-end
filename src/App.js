import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList.js';
import './App.css';
import NewTaskForm from './components/NewTaskForm.js';

const App = () => {
  const baseUrl = 'http://127.0.0.1:5000/tasks';

  const [taskData, setTaskData] = useState([]);

  const taskDataConvert = (res) => {
    return res.map((task) => {
      return { ...task, isComplete: task.is_complete};
    });
  };

  const getTaskData = () => {
    axios.get(baseUrl)
    .then(res => {
      setTaskData(taskDataConvert(res.data));
      console.log(taskDataConvert(res.data));
    })
    .catch((err) => console.log(err));
    
  };

  useEffect(() => {
    getTaskData();
  }, []);
  
  const updateTaskData = updatedTaskData => {
    const tasks = taskData.map(task => {
      if (task.id === updatedTaskData.id) {
        return {
          ...task,
          isComplete: updateTaskData.isComplete,
        }; 
      }
      return task;
    });
    setTaskData(tasks);

    let completeOrIncomplete = updatedTaskData.isComplete;

    if (completeOrIncomplete) {
      axios
        .patch(`${baseUrl}/${updatedTaskData.id}/mark_complete`)
        .then((res) => console.log("Back end response", res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .patch(`${baseUrl}/${updatedTaskData.id}/mark_incomplete`)
        .then((res) => console.log("Back end response", res.data))
        .catch((err) => console.log(err));
    }
  };

  const onDeleteItem = id => {
    // this was surprisingly close to what I had!
    setTaskData((prev) => prev.filter((task) => task.id !== id));

    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const addNewTaskData = newTask => {
    const newTaskList = [...taskData];
    
    newTaskList.push({
      title: newTask.title,
      isComplete: newTask.isComplete,
    });
    setTaskData(newTaskList);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={taskData} onUpdateTask={updateTaskData} onDeleteItem={onDeleteItem}/></div>
        <NewTaskForm addTaskCallback={addNewTaskData}/>
      </main>
    </div>
  );
};

export default App;
