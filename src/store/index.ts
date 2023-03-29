import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todosApi } from './api/todo-api';

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (midleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});
