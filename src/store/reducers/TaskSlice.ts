import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../types/interfaces"

interface TaskState{
    tasks: ITask[];
    isLoading: boolean;
    error: string;   
}


const initialState: TaskState = {
    tasks: [{id:"1",text:"Go to Football"},{id:"2",text:"Codding"},{id:"3",text:"CS:GO"}],
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
        }
    }
})

export default taskSlice.reducer;