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
        const value = event.target.value;
        const name = event.target.name;

        setNewTask({
                ...newTask,
                [name]: value
        });
    };     

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addNewTaskData({
            title: newTask.title,
            description: newTask.description,
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
                    className='task-input'
                    type='text' 
                    name='title' 
                    value={newTask.title} 
                    onChange={onNewTask}
                /> 
            </label>
            <label>Enter new description: 
                <input 
                    className='task-input'
                    type='text' 
                    name='description' 
                    value={newTask.description} 
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