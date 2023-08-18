export interface ITask {
    id: number;
    description: string;
    completed: boolean;
}

export interface IState {
    tasks: Array<ITask>,
    query: string,
}