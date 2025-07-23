import UserComponent from '@/components/user-component';
import './style.css';
import { Suspense } from 'react';

type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

type Todos = {
    limit : number;
    skip: number;
    todos: Array<Todo>;
    total: number;
}

export default async function TodosPage() {
    console.log("TodosPage component rendered");

    const todosResponse = await fetch("https://dummyjson.com/todos")
    const todosData: Todos = await todosResponse.json();

    console.log("Fetched todos:", todosData);
    
    const todos = todosData.todos;

    return (
        <div>
            <h1>Todos</h1>
            <ul className='card-container'>
                {todos.map((todo: Todo) => (
                    <li key={todo.id} className="card">
                        <h2>{todo.todo}</h2>
                        <Suspense fallback={<p>Loading user...</p>}>
                            <UserComponent userId={todo.userId} />
                        </Suspense>
                        <div className="todo-item">
                            <button className={todo.completed ? "edit" : ""}>
                                {todo.completed ? "Undo" : "Complete"}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}