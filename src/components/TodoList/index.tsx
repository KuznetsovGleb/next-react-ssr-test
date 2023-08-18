// Core
import { FC, useEffect, useMemo } from 'react';

// Instruments
import { useTasksContext } from "../../context";
import { initializeStore } from "../../context/actions";
import { getFilteredTasks } from "../../utils/helpers/filterTasks";
import { manageLocalStorage } from "../../utils/helpers/localStorage";

// Components
import { TodoListItem } from '../TodoListItem';

import styles from './index.module.scss'

export const TodoList: FC = () => {
    const {state: { tasks, query }, dispatch} = useTasksContext();

    useEffect(() => {
        const tasks = manageLocalStorage.loadData('tasks') || [];
        initializeStore(dispatch, {tasks});
    }, []);

    useEffect(() => {
        manageLocalStorage.saveData('tasks', tasks);
    }, [tasks]);

    const formattedTasks = useMemo(() => {
        return getFilteredTasks(query, tasks);
    }, [tasks, query]);

    return (
        <ul className={styles.list}>
            {formattedTasks?.map((task) => (
                <TodoListItem key={task.id} task={task} />
            ))}
        </ul>
    )
};