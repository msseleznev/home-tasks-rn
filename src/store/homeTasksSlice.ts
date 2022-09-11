import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterOptionsType, TaskType} from "../types/types";


type HomeTasksSliceType = {
    homeTasks: TaskType[]
    filter: FilterOptionsType
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
            isDone: true
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
            isDone: true
        },
    ],
    filter: "Показать все задания"
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
        changeStatus(state, action: PayloadAction<{ id: number, isDone: boolean }>) {
            state.homeTasks = state.homeTasks.map((t) => t.id === action.payload.id
                ? {...t, isDone: action.payload.isDone}
                : t
            )
        },
        changeFilter(state, actions: PayloadAction<FilterOptionsType>) {
            state.filter = actions.payload
        }
    },
});

export const homeTasksSlice = slice.reducer;
export const {createTask, removeTask, changeStatus, changeFilter} =
    slice.actions;

export type TasksActionType =
    | ReturnType<typeof createTask>
    | ReturnType<typeof removeTask>
    | ReturnType<typeof changeStatus>
    | ReturnType<typeof changeFilter>


