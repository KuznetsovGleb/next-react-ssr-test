// Instruments
import { ActionTypes } from "./actions";
import { IState } from "../typing";

export const initialState = {tasks: [], query: ''};

export const reducer = (state: IState, action): IState => {
    const { tasks, query } = state;
    switch (action.type) {
        case ActionTypes.ADD_TASK: {
            return {
                query,
                tasks: [
                    ...tasks,
                    {
                        id: action.payload.id,
                        description: action.payload.description,
                        completed: false,
                    }
                ]
            }
        }
        case ActionTypes.DELETE_TASK: {
            return {
                query,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id)
            }
        }
        case ActionTypes.TOGGLE_COMPLETE_TASK: {
            return {
                query,
                tasks: tasks.map((task) => task.id !== action.payload.id ? task : {...task, completed: !task.completed})
            }
        }
        case ActionTypes.EDIT_TASK: {
            return {
                query,
                tasks: tasks.map((task) => task.id !== action.payload.id ? task : {...task, description: action.payload.description})
            }
        }
        case ActionTypes.INITIALIZE_STORE: {
            return {
                query,
                tasks: action.payload.tasks
            }
        }
        case ActionTypes.SET_QUERY_VALUE: {
            return {
                query: action.payload.query,
                tasks
            }
        }
        case ActionTypes.SET_ALL_COMPLETED: {
            return {
                query,
                tasks: tasks.map((task) => ({...task, completed: true}))
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
};
