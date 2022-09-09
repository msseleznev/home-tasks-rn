import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TaskType} from "../types/types";


type HomeTasksSliceType = {
    homeTasks: TaskType[]
};


const initialState: HomeTasksSliceType = {
    homeTasks: [
        {
            id: 1,
            title: 'Математика',
            body: 'Стр. 4, упр. 36 а, б.',
            status: false
        },
        {
            id: 2,
            title: 'Русский язык',
            body: 'Учебник, стр. 4, упр. 36 а, б.',
            status: true
        },
        {
            id: 3,
            title: 'ИЗО',
            body: 'Подготовить клей, ножницы, вл. салфетки, цветную бумагу, шерстяные нитки',
            status: false
        },
        {
            id: 4,
            title: 'Литература',
            body: 'Учебник, стр. 4, упр. 36 а, б.',
            status: true
        },
    ]
};

const slice = createSlice({
    name: 'homeTasks',
    initialState,
    reducers: {
        createTask(state, action: PayloadAction<TaskType>) {
            state.homeTasks.unshift(action.payload)
        },
        removeTask(state, action: PayloadAction<{ id: number }>) {
            state.homeTasks = state.homeTasks.filter(t => t.id !== action.payload.id)
        },
        changeStatus(state, action: PayloadAction<{ id: number, status: boolean }>) {
            state.homeTasks = state.homeTasks.map((t) => t.id === action.payload.id
                ? {...t, status: action.payload.status}
                : t
            )
        }

    },
});

export const homeTasksSlice = slice.reducer;
export const {createTask, removeTask,changeStatus} =
    slice.actions;

export type TasksActionType =
    | ReturnType<typeof createTask>
    | ReturnType<typeof removeTask>
    | ReturnType<typeof changeStatus>


