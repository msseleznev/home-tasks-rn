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
            isDone: false
        },
        {
            id: 2,
            title: 'Русский язык',
            body: 'Учебник, стр. 4, упр. 36 а, б.',
            isDone: false
        },
        {
            id: 3,
            title: 'ИЗО',
            body: 'Подготовить клей, ножницы, вл. салфетки, цветную бумагу, шерстяные нитки',
            isDone: false
        },
        {
            id: 4,
            title: 'Литература',
            body: 'Учебник, стр. 4, упр. 36 а, б.',
            isDone: false
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
        removeTask(state, action: PayloadAction<TaskType>) {
            state.homeTasks = state.homeTasks.filter(t => t.id !== action.payload.id)
        },

    },
});

export const homeTasksSlice = slice.reducer;
export const {createTask, removeTask,} =
    slice.actions;

export type TasksActionType =
    | ReturnType<typeof createTask>
    | ReturnType<typeof removeTask>


