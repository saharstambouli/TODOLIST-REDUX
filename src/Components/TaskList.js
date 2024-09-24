import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    switch (filter) {
      case "Incompleted":
        setFilteredTasks(tasks.filter(task => !task.isDone));
        break;                                                     ///The issue was that the render doesn’t automatically launch the filter function when tasks change. By using useEffect, we ensure that the filter function runs every time tasks or the filter selection changes, so our list updates correctly without needing a manual trigger.
      case "Done":
        setFilteredTasks(tasks.filter(task => task.isDone));
        break;
      case "All":
      default:
        setFilteredTasks(tasks);
    }
  }, [tasks, filter]);


  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Incompleted">Incompleted</option>
        <option value="Done">Done</option>

      </select>
      <ul>

        {

          (filteredTasks?.length > 0) ? (
            filteredTasks?.map((task) => (
              <TaskItem key={task.id} task={task} />


            ))

          ) : (
            <h1>No Task</h1>
          )
        }

      </ul>


    </div>
  )
}

export default TaskList