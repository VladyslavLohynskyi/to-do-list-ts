import './Task.css';
import {ITask} from "../../types/interfaces"
import {FC} from 'react';
import trash from "../../assets/images/trash.svg"
import { taskSlice } from '../../store/reducers/TaskSlice';
import { useAppDispatch } from '../../hooks/redux';

interface IProps {
    task:ITask
}


const Task:FC<IProps> = ({task}) => {
    const {deleteTask} = taskSlice.actions;
    const dispatch = useAppDispatch()
    const handleClickDelete = () => {
        dispatch(deleteTask(task.id))
    }
    return (
    <div className="task-container">
        <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"></span>
        </label>
        <div className='task-text'>{task.text}</div>
        <button onClick={handleClickDelete} className='delete-btn'><img src={trash} alt="delete"/></button>
    </div>
  );
}

export default Task;
