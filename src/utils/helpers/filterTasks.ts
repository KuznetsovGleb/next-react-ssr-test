import { ITask } from "../../typing";

export const getFilteredTasks = (queryValue: string, tasks: Array<ITask>): Array<ITask> =>
    tasks?.filter((task) => task.description.toLowerCase().includes(queryValue.toLowerCase()));
