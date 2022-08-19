
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { taskSlice } from '../../store/reducers/TaskSlice';
import Category from '../Category/Category';
import Tasks from '../Tasks/Tasks';
import './App.css';

function App() {
  const {getTasks} = taskSlice.actions;
  const dispatch = useAppDispatch()
  useEffect(()=>{
    const storageTasks = JSON.parse(localStorage.getItem("tasks") as string) || []
    dispatch(getTasks(storageTasks))
    },[])
  return (
    <div className="app">
      <div className='app-container'>
        <Category/>
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
