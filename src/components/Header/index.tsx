// Core
import { ChangeEvent, FC } from "react";

// Instruments
import { useTasksContext } from "../../context";
import { setQueryValue } from "../../context/actions";
import { TextField } from '@material-ui/core';

import styles from './index.module.scss';

export const Header: FC = () => {
    const { dispatch } = useTasksContext();

    const handleChangeInput = ({target}: ChangeEvent<HTMLInputElement>): void => {
        setQueryValue(dispatch, {query: target.value});
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Планировщик задач</h1>
            <TextField
                className={styles.input}
                variant="outlined"
                onChange={handleChangeInput}
                label="Поиск"
                type="text"
            />
        </header>
    );
};