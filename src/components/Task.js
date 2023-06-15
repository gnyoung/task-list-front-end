import React, { useState } from 'react';
import PropTypes from 'prop-types';


import './Task.css';



const Task = ({ id, title, isComplete, onUpdateTask }) => {
  const toggleIsComplete = () => {
    const updatedTask = {
      id: id,
      title: title,
      isComplete: !complete
  };
  setComplete(!complete);
  onUpdateTask(updatedTask);
};

  const [complete, setComplete] = useState(isComplete);
  let buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  
  return (
    <li className="tasks__item">
      <button className={buttonClass} onClick={toggleIsComplete}>{title}</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdateTask: PropTypes.func.isRequired
};

export default Task;