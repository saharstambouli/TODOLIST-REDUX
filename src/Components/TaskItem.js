import '../styles/TaskItem.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { DeleteTask, ToogleTask, UpdateTask } from './../actions/actions';
import { useState } from 'react';



const TaskItem = ({ task }) => {

    const dispatch = useDispatch();
    const deleteTask = () => dispatch(DeleteTask(task.id));
    const toggleTask = () => { dispatch(ToogleTask(task.id)); 
      setUpdate((prev) => ({ ...prev, isDone: !prev.isDone })) };
     

    const [isEditing, setIsEditing] = useState(false);

    const handleSaveClick = () => {
        dispatch(UpdateTask(updated));
        setIsEditing(false);
    };

    const [updated, setUpdate] = useState(task);
    
    const onChange = (e) => setUpdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    return (
        <li className='Form-item'>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="taskName"
                        value={updated.taskName}
                        onChange={onChange}

                    />
                    <input
                        type="text"
                        name="description"
                        value={updated.description}
                        onChange={onChange}
                    />
                </div>
            ) : (
                <div style={{ textDecoration: updated.isDone ? 'line-through' : 'none' }}>
                    <strong>{task.taskName}</strong>: {task.description}
                </div>
            )}
            <Button variant="success" onClick={() => toggleTask(task.id)}>
                {task.isDone ? 'Incomplete' : 'Done'}
            </Button>
            {isEditing ? (
                <>
                    <Button variant="warning" onClick={handleSaveClick}>Save</Button>
                    <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                </>
            ) : (
                <Button variant="success" onClick={() => setIsEditing(true)}>Edit</Button>
            )}
            <Button variant="danger" onClick={() => {
                if (window.confirm('Are you sure you wish to delete this item?')) {
                    deleteTask(task.id);
                }
            }}>
                Delete
            </Button>
        </li>
    );
};

export default TaskItem