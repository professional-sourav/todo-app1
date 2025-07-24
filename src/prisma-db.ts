import { Todo } from '../types';
import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

const seedTodos = async () => {
    const todosCount = await prisma.todo.count();
    console.log(`Current todos count: ${todosCount}`);
    
    if (!todosCount) {

        const todos: Todo[] = [
            { title: 'Learn Next.js', description: 'Study the Next.js documentation and build a sample app.', completed: false, createdAt: new Date(), updatedAt: new Date() },
            { title: 'Build a Todo App', description: 'Create a simple Todo application using Next.js and Prisma.', completed: false, createdAt: new Date(), updatedAt: new Date() },
            { title: 'Deploy the App', description: 'Deploy the Todo app to Vercel or another hosting provider.', completed: false, createdAt: new Date(), updatedAt: new Date() },
        ];
        
        await prisma.todo.createMany({
            data: todos,
        })
    }
}

seedTodos()
    .then(() => {
        console.log('Seeding completed successfully.');
    })
    .catch((error) => {
        console.error('Error seeding data:', error);
    })


export async function getTodos(): Promise<Todo[]> {
    const todos = await prisma.todo.findMany();
    console.log('Fetching todos from the database...', todos);
    
    return await prisma.todo.findMany();
}

export async function createTodo(title: string, description: string | null, completee: boolean): Promise<Todo> {
    const newTodo = await prisma.todo.create({
        data: {
            title,
            description,
            completed: completee,
        },
    });
    
    console.log('New todo created:', newTodo);
    
    return newTodo;


}