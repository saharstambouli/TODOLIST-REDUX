import React, { useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { AddTask } from '../actions/actions';
import { v4 as myid } from 'uuid';

const AddTasks = () => {

  const [task, setTask] = useState({ taskName: "", description: "",isDone:false });
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const onChange = (e) => setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));


  const validate = () => {
    setError({});
    if (!task.taskName) {
      setError((prev) => ({ ...prev, taskName: "TaskName Is Empty" }))
    }
    if (!task.description)
      setError((prev) => ({ ...prev, description: "Description Is Empty" }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    validate();
    if (Object.keys(error).length == 0)
      dispatch(AddTask({...task,id:myid()}));
  }
  return (
    <div>
      <h1 style={{ color: 'green' }}>TO Do List</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="Add a task"
          onChange={onChange}

        />
        {error.taskName && <p style={{ color: "red", fontSize: 12 }}>{error.taskName}</p>}
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={onChange}

        />
        {error.description && <p style={{ color: "red", fontSize: 12 }}>{error.description}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );


};

export default AddTasks;