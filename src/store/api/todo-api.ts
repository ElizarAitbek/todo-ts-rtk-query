import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodos } from '../../model';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://todo-app-4f725-default-rtdb.firebaseio.com/',
    }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getAllTodo: builder.query<string | number, string>({
            query: () => 'todos.json',
            providesTags: ['Todos'],
        }),
        createTodo: builder.mutation<number | string, ITodos>({
            query: (todo) => ({
                url: 'todos.json',
                method: 'POST',
                body: todo,
            }),

            invalidatesTags: ['Todos'],
        }),
    }),
});

export const { useGetAllTodoQuery, useCreateTodoMutation } = todosApi;
