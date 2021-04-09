const initialState = [
    { id: 1, text: "todo 1", completed: false },
    { id: 2, text: "todo 2", completed: false },
    { id: 3, text: "todo 3", completed: false },
]

//actions
const COMPLETED = 'COMPLETED';

//action creators
export const completedAction = (id) => {
    return {
        type: COMPLETED,
        payload: id
    }
}

//reducer
export default (state = initialState, action) => {
    console.log('action called in todos-reducer: ', action);
    switch (action.type) {
        case COMPLETED:
            return state.map(it => it.id === action.payload ? { ...it, completed: !it.completed } : it)
        default:
            return state;
    }
}
