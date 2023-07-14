const { createStore } = require("redux")

const incrementUser = 'incrementUser'

const counterState =
{
    count: 1,
    users: ['zubair']
}

const addUser = (user) => {
    return {
        type: incrementUser,
        payload: user
    }
}

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case incrementUser:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            state;
    }
}

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser('ahmed'));