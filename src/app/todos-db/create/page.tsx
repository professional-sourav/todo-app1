import { createTodo } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function CreateTodoPage() {

    async function createNewTodo(form: FormData) {

        "use server";

        const title = form.get('title') as string;
        const description = form.get('description') as string | null;
        const completed = form.get('completed') === 'on';

        await createTodo(title, description, completed);

        redirect('/todos-db');
    }

    return (
        <div>
            <h1>Create Todo</h1>
            <form action={createNewTodo}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description"></textarea>
                </div>
                <div>
                    <label htmlFor="completed">Completed:</label>
                    <input type="checkbox" id="completed" name="completed" />
                </div>
                <button type="submit">Create Todo</button>
            </form>
        </div>
    );
}