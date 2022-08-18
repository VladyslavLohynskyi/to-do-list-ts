import React, { Key, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { taskSlice } from "../../store/reducers/TaskSlice";
import Task from "../Task/Task";
import './Tasks.css';
import { v4 as uuidv4 } from "uuid";

function Tasks() {
    const [text, setText] = useState('')
    const {tasks} = useAppSelector((state)=>state.taskReducer);
    const {addTask} = taskSlice.actions;
    const dispatch = useAppDispatch();

    const handleChangeText = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }

    const handleAddTask = (e : React.KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === "Enter" && text) {
            setText("")
            dispatch(addTask({text, id:uuidv4()}))
        }
      };

    return (
    <div className="tasks-container">
        <h2 className='task-header'>All Tasks</h2>
        <input className='add-input' onChange={handleChangeText} value={text} onKeyPress={handleAddTask} type="text" placeholder="Add new To Do"/>
        <div className='tasks'>
            {tasks.map(task=><Task key={task.id as Key} task={task}/>)}
        </div>
    </div>
  );
}

export default Tasks;
