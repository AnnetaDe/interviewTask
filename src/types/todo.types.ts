export interface ITodo {
    id: number;
    task: string;
    isdone: boolean;
    createdAt?: Date;
    priority?: 'low' | 'medium' | 'high'| 'none'|string;
    schedule?: Date;
}