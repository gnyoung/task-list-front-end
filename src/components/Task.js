import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';


const Task = ({ id, title, description, isComplete, onUpdateTask, onDeleteItem, expandDescription }) => {
  const toggleIsComplete = () => {
    const updatedTask = {
      id: id,
      title: title,
      description: description,
      isComplete: !complete
    };
    setComplete(!complete);
    onUpdateTask(updatedTask);
  };

  const descriptionId = `${id}`;
  const [complete, setComplete] = useState(isComplete);
  let buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className='tasks__item'>
      <button className={`tasks__item__toggle ${buttonClass}`} onClick={toggleIsComplete}>
        <span id='title-span'>{title}</span>
        <br />
        <br />
        <span id={`description-span-${descriptionId}`} className='description'>{description}</span>
      </button>
      <div id='side-buttons'>
        <button className='tasks__item__remove button' onClick={() => onDeleteItem(id)}>x</button>
        <button id='expand-button' onClick={() => expandDescription(descriptionId)}>▼</button>
      </div>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  description: PropTypes.string,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  expandDescription: PropTypes.func.isRequired
};

export default Task;