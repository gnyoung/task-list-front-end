import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';


const NewTaskForm = (props) => {
    const [newTask, setNewTask] = useState({
        title: '',
        isComplete: false,
    });

    const onNewTask = (event) => {
        setNewTask(prev => {
            return {
                ...prev,
                title: event.target.value
            };
        });
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addTaskCallback({
            title: newTask.title,
            isComplete: false,
        });

        props.handleSubmit(event);

        setNewTask(prev => {
            return {
                ...prev,
                title: '',
            };
        });
    };

    return (
    <form onSubmit={onFormSubmit}>
        <div>
            <label>Enter new task: 
                <input 
                    id='task-input'
                    type='text' 
                    name='newTask' 
                    value={newTask} 
                    onChange={onNewTask}
                /> 
            </label>
        </div>
            <input type='submit' value='Submit'/> 
    </form>
    );
};

NewTaskForm.propTypes = {
    addTaskCallback: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;