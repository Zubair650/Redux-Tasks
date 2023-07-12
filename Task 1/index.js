const { createStore } = require("redux")
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const addUser = 'addUser'

const incrementCounterState = {
    count: 0
}
const incrementUserState =
{
    user: [{ name: 'Zubair' }]
}

const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
}

const resetAction = () => {
    return {
        type: RESET
    }
}

const AddUser = () => {
    return {
        type: addUser,
        payload: { name: 'Ahmed' }
    }
}

const counterReducer = (state = incrementCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            state;
    }
}

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetAction());
store.dispatch(incrementCounterAction());