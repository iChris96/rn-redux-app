const initialState = [
    { id: 1, text: "todo 1", completed: false },
    { id: 2, text: "todo 2", completed: false },
    { id: 3, text: "todo 3", completed: false },
]

//actions
const COMPLETED = 'COMPLETED';
const ADD = 'ADD';
const START_SUBMIT = 'START_SUBMIT';
const ERROR_SUBMIT = 'ERROR_SUBMIT';

//action creators
export const completedAction = (id) => {
    return {
        type: COMPLETED,
        payload: id
    }
}

export const addTodoAction = (todo) => {
    return {
        type: ADD,
        payload: todo
    }
}

export const startSubmitAction = () => ({ type: START_SUBMIT });

export const errorSubmitAction = (error) => ({ type: ERROR_SUBMIT, error })

//reducer
export default (state = initialState, action) => {
    console.log('action called in todos-reducer: ', action);
    switch (action.type) {
        case COMPLETED:
            return state.map(it => it.id === action.payload ? { ...it, completed: !it.completed } : it)
        case ADD:
            return [action.payload].concat(state);
        default:
            return state;
    }
}


//thunks
export const addTodoThunk = (value) => async (dispatch, getState) => {
    const state = getState();
    //console.log("addTodoThunk-state: ", state)
    dispatch(startSubmitAction);
    try {
        const todo = {
            text: value,
            completed: false
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todo)
        })

        const responseJson = await response.json();
        console.log("responseJson: ", responseJson)
        const { id } = responseJson;

        dispatch(addTodoAction({ ...todo, id }))
    } catch (e) {
        dispatch(errorSubmitAction(e));
    }
}