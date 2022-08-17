import './Task.css';
import {ITask} from "../../enum/enum"
import {FC} from 'react';
import trash from "../../assets/images/trash.svg"

interface IProps {
    task:ITask
}


const Task:FC<IProps> = ({task}) => {
    return (
    <div className="task-container">
        <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"></span>
        </label>
        <div className='task-text'>{task.text}</div>
        <button className='delete-btn'><img src={trash} alt="delete"/></button>
    </div>
  );
}

export default Task;
