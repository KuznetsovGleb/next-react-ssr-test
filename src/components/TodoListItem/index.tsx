// Core
import { useState, useRef, useEffect, FC, KeyboardEvent } from 'react';
import { isEqual } from 'lodash';
import { IconButton, Checkbox } from '@material-ui/core';
import { Edit as EditIcon, Close as CloseIcon } from '@material-ui/icons';

// Instruments
import { KEYS } from "../../utils/constants";
import { deleteTask, toggleCompleteTask, editTask } from "../../context/actions";
import { useTasksContext } from "../../context";
import { ITask } from "../../typing";

import styles from './index.module.scss';

interface Props {
    task: ITask;
}

export const TodoListItem: FC<Props> = ({task}) => {
    const [active, setActive] = useState(false);
    const inputElement = useRef(null);
    const { id, description, completed } = task;
    const { dispatch } = useTasksContext();

    useEffect(() => {
        if (active) inputElement.current.focus();
    }, [active]);

    const handleDescriptionChange = (): void => {
        if (!isEqual(inputElement.current.value, description)) {
            editTask(dispatch, {id, description: inputElement.current.value});
        }
        setActive(false);
    };
    const handleClickEditBtn = (): void => {
        active ? handleDescriptionChange() : setActive(true);
    };
    const handleKeyPress = (event: KeyboardEvent) => {
        if (isEqual(event.key, KEYS.ENTER)) handleDescriptionChange();
        if (isEqual(event.key, KEYS.ESCAPE) && !isEqual(inputElement.current.value, description)) {
            inputElement.current.value = description;
            setActive(false);
        }
    };

    return (
        <li className={styles.wrapper}>
            <div className={styles.content}>
                <Checkbox
                    size="small"
                    color="primary"
                    checked={completed}
                    onChange={() => toggleCompleteTask(dispatch,{id})}
                />
                <input className={styles.input}
                       disabled={!active}
                       onKeyDown={handleKeyPress}
                       ref={inputElement}
                       defaultValue={description}
                       maxLength={50}
                       type="text"
                />
            </div>
            <div className={styles.iconsWrapper}>
                <IconButton onClick={handleClickEditBtn}>
                    <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={() => deleteTask(dispatch, {id})}>
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            </div>
        </li>
    )
};
