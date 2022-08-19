import React, { Key, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { taskSlice } from "../../store/reducers/TaskSlice";
import Task from "../Task/Task";
import './Tasks.css';
import { v4 as uuidv4 } from "uuid";
import { CategoryEnum } from "../../types/enum";
import { ITask } from "../../types/interfaces";

function Tasks() {
    const [text, setText] = useState('')
    const {tasks,category} = useAppSelector((state)=>state.taskReducer);
    const {addTask} = taskSlice.actions;
    const dispatch = useAppDispatch();

    const handleChangeText = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }

    const handleAddTask = (e : React.KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === "Enter" && text) {
            setText("")
            dispatch(addTask({text, checked:false,createdAt: new Date().getTime(), id:uuidv4()}))
        }
      };

    const filterTasks = (category: CategoryEnum)=>{
        switch (category) {
             case CategoryEnum.ALL_CATEGORIES:
                return tasks.length?tasks.map(task=><Task key={task.id as Key} task={task}/>):<div className="empty-tasks">No One Tasks</div>
             case CategoryEnum.COMPLETED:
                const filteredCompleteTasks = tasks.filter(task=>task.checked);
                return filteredCompleteTasks.length?filteredCompleteTasks.map(task=><Task key={task.id as Key} task={task}/>):<div className="empty-tasks">No One Tasks</div>
            case CategoryEnum.UNCOMPLETED:
                const filteredUnCompleteTasks = tasks.filter(task=>!task.checked);
                return filteredUnCompleteTasks.length?filteredUnCompleteTasks.map(task=><Task key={task.id as Key} task={task}/>):<div className="empty-tasks">No One Tasks</div>
        
        }
      }

 

    return (
    <div className="tasks-container">
        <h2 className='task-header'>All Tasks</h2>
        <input className='add-input' onChange={handleChangeText} value={text} onKeyPress={handleAddTask} type="text" placeholder="Add new Task"/>
        <div className='tasks'>
            {filterTasks(category)}
        </div>
    </div>
  );
}

export default Tasks;
