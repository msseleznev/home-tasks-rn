import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {homeTasksSlice, TasksActionType} from "./homeTasksSlice";

const rootReducer = combineReducers({
    homeTasksSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


