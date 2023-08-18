// Core
import { FC } from 'react';
import { setAllTasksCompleted } from '../../context/actions';
import { Checkbox , FormControlLabel} from "@material-ui/core";

// Instruments
import {useTasksContext} from "../../context";

import styles from './index.module.scss';

export const Footer: FC = () => {
    const {state: { tasks }, dispatch} = useTasksContext();

    const isChecked = tasks?.every(({completed}) => completed) || false;

    const handleClickCheckbox = (): void => {
        if (!isChecked) {
            setAllTasksCompleted(dispatch);
        }
    };

    return (
        <footer className={styles.footer}>
            <FormControlLabel
                control={
                    <Checkbox
                        size="small"
                        color="primary"
                        className={styles.checkbox}
                        checked={isChecked}
                        onChange={handleClickCheckbox}
                    />
                }
                label="Все задачи выполнены"
            />
        </footer>
    )
};
