// Core
import {createContext, Dispatch, useContext, useReducer} from 'react';

// Instruments
import { reducer, initialState } from "./reducer";
import { IState } from "../typing";


type TasksContextType = {
    state: IState;
    dispatch: Dispatch<any>;
};

const TasksContext = createContext<TasksContextType>(null);

const TasksProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return <TasksContext.Provider value={value} {...props} />;
};

const useTasksContext = (): TasksContextType => {
    const context = useContext(TasksContext);
    if (context === undefined) {
        throw new Error(`useTasksContext must be used within a TasksProvider`)
    }

    return context;
};

export {TasksProvider, useTasksContext}
