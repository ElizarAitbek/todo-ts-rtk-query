import { FC } from 'react';
import { useGetAllTodoQuery } from '../store/api/todo-api';
import { CreateTodo } from './CreateTodo';

export const Todos: FC = () => {
    const {
        data: incomingData,
        isError,
        isLoading,
        isSuccess,
        error,
    } = useGetAllTodoQuery('');

    let content;
    if (isLoading) {
        <p>Loading...</p>;
    } else if (isSuccess) {
        const values = Object.values(incomingData) as Array<{
            completed: boolean;
            id: number;
            title: string;
        }>;
        content = values.map((item) => <p key={item.id}>{item.title}</p>);
    } else if (isError) {
        content = error;
    }

    return (
        <main>
            <>
                <CreateTodo />
                {content}
            </>
        </main>
    );
};
