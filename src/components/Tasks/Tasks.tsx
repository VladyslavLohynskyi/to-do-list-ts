import { Key } from "react";
import {ITask} from "../../enum/enum"
import { useAppSelector } from "../../hooks/redux";
import Task from "../Task/Task";
import './Tasks.css';

function Tasks() {
    const {tasks,error,isLoading} = useAppSelector((state)=>state.taskReducer)
    return (
    <div className="tasks-container">
        <h2 className='task-header'>All Tasks</h2>
        <input className='add-input' type="text" placeholder="Add new To Do"/>
        <div className='tasks'>
            {tasks.map(task=><Task key={task.id as Key} task={task}/>)}
        </div>
    </div>
  );
}

export default Tasks;
