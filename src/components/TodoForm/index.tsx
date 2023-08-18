// Core
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button, TextField } from "@material-ui/core";
import { Add as AddIcon} from '@material-ui/icons';

// Instruments
import { generateRandomId } from '../../utils/helpers/idGeneration';
import { addTask } from '../../context/actions';
import { useTasksContext } from "../../context";

import styles from './index.module.scss';

export const TodoForm: FC = () => {
    const [value, setValue] = useState('');
    const { dispatch } = useTasksContext();

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>): void => {
        setValue(target.value);
    };

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (!value.trim()) return;
        const taskId = generateRandomId();
        addTask(dispatch, {id: taskId, description: value});
        setValue('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmitForm} autoComplete="off">
            <div className={styles.inputWrapper}>
                <TextField
                    value={value}
                    className={styles.input}
                    variant="outlined"
                    onChange={handleChange}
                    label="Описание новой задачи"
                    type="text"
                />
            </div>
            <Button
                className={styles.submitBtn}
                size="small"
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
            >
                Добавить задачу
            </Button>
        </form>
    );
};
