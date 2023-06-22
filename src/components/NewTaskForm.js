import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';


const NewTaskForm = (props) => {
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        isComplete: false,
    });

    const onNewTask = (event) => {
        setNewTask({
                ...newTask,
                title: event.target.value
                 
        });
    };     

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addNewTaskData({
            title: newTask.title,
            description: 'Test description',
            isComplete: newTask.isComplete
        });

        props.handleSubmit(newTask);

        setNewTask({
            title: '',
            description: ''  
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
                    value={newTask.title} 
                    onChange={onNewTask}
                /> 
            </label>
        </div>
            <input type='submit' value='Submit'/> 
    </form>
    );
};

NewTaskForm.propTypes = {
    addNewTaskData: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;