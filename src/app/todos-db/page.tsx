import { getTodos } from "@/prisma-db";
import { Todo } from "../../../types";


export default async function TodosDBPage() {
    const todos: Todo[] = await getTodos();

    console.log('Todos fetched:', todos);
    
    
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos?.map((todo: Todo) => (
                    <li key={todo.id}>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                        <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
                        <p>Created at: {new Date(todo.createdAt).toLocaleString()}</p>
                        <p>Updated at: {new Date(todo.updatedAt).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}