import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';


const TaskList = ({ tasks, onUpdateTask, onDeleteItem, expandDescription }) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      console.log(task);
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isComplete={task.isComplete}
          onUpdateTask={onUpdateTask}
          onDeleteItem={onDeleteItem}
          expandDescription={expandDescription}
        />
      );
    });
  };
  return <ul className='tasks__list no-bullet'>{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool,
    })
  ).isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  expandDescription: PropTypes.func.isRequired
};

export default TaskList;
