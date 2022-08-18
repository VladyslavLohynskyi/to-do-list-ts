import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../enum/enum"

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

    }
})

export default taskSlice.reducer;