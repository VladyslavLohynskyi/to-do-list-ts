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
        addTask(state, action: PayloadAction<ITask>){
            state.tasks = [...state.tasks,action.payload];
        },
        deleteTask(state, action: PayloadAction<string>){
            state.tasks = state.tasks.filter(task=>task.id !== action.payload)
        }
    }
})

export default taskSlice.reducer;