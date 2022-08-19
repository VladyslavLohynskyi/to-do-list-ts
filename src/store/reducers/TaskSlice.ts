import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../types/interfaces"

interface ITaskState{
    tasks: ITask[];
    isLoading: boolean;
    error: string;   
}

interface ICheckedTask{
    id:string;
    checked:boolean;
}


const initialState: ITaskState = {
    tasks: [],
    isLoading: false,
    error: ""
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        getTasks(state, action:PayloadAction<ITask[]>){
            state.tasks = action.payload
        },
        addTask(state, action: PayloadAction<ITask>){
            state.tasks = [...state.tasks,action.payload];
            localStorage.setItem("tasks",JSON.stringify(state.tasks))
        },
        deleteTask(state, action: PayloadAction<string>){
            state.tasks = state.tasks.filter(task=>task.id !== action.payload)
            localStorage.setItem("tasks",JSON.stringify(state.tasks))
        },
        checkTask(state,action: PayloadAction<ICheckedTask>){
            state.tasks = state.tasks.map(task=>task.id === action.payload.id
                ?{...task,checked:action.payload.checked}:task);
            localStorage.setItem("tasks",JSON.stringify(state.tasks))
        }
    }
})

export default taskSlice.reducer;