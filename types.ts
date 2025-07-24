export type Todo = {
    id?: number;
    title: string;
    description?: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}