export const ActionTypes: { [name: string]: string } = {
    ADD_TASK: `ADD_TASK`,
    DELETE_TASK: `DELETE_TASK`,
    EDIT_TASK: `EDIT_TASK`,
    TOGGLE_COMPLETE_TASK: `TOGGLE_COMPLETE`,
    SET_ALL_COMPLETED: `SET_ALL_COMPLETED`,
    SET_QUERY_VALUE: `SET_QUERY_VALUE`,
    INITIALIZE_STORE: `INITIALIZE_STORE`,
};

export const initializeStore = (dispatch, payload) => dispatch({type: ActionTypes.INITIALIZE_STORE, payload});
export const addTask = (dispatch, payload) => dispatch({type: ActionTypes.ADD_TASK, payload});
export const deleteTask = (dispatch, payload) => dispatch({type: ActionTypes.DELETE_TASK, payload});
export const editTask = (dispatch, payload) => dispatch({type: ActionTypes.EDIT_TASK, payload});
export const toggleCompleteTask = (dispatch, payload) => dispatch({type: ActionTypes.TOGGLE_COMPLETE_TASK, payload});
export const setAllTasksCompleted = (dispatch) => dispatch({type: ActionTypes.SET_ALL_COMPLETED});
export const setQueryValue = (dispatch, payload) => dispatch({type: ActionTypes.SET_QUERY_VALUE, payload});
