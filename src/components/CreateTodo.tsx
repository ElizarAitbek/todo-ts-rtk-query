import { FC, FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCreateTodoMutation } from '../store/api/todo-api';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export const CreateTodo: FC = () => {
    const [newTodo, setNewTodo] = useState('');

    const [createTodo] = useCreateTodoMutation();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createTodo({
            title: newTodo,
            id: Math.floor(Math.random() * 100),
            completed: false,
        });
        setNewTodo('');
    };
    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">Enter a new todo item</label>
                <div className="new-todo">
                    <input
                        type="text"
                        id="new-todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Enter new todo"
                    />
                </div>
                <button className="submit">
                    <FontAwesomeIcon icon={faUpload} />
                </button>
            </form>
        </>
    );
};
