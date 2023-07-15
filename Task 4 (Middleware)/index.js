const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const ADD_COFFEE = "ADD_COFFEE";

const initialCoffeeState = {
    cups: 1,
    coffee: ["Black Coffee"]
}

const Add_Coffee = (coffee) => {
    return {
        type: ADD_COFFEE,
        payload: coffee
    }
}

const coffeeReducer = (state = initialCoffeeState, action) => {
    switch (action.type) {
        case ADD_COFFEE:
            return {
                cups: state.cups + 1,
                coffee: [...state.coffee, action.payload]
            }

        default:
            return state;
    }
}

const store = createStore(coffeeReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(Add_Coffee('Cappuccino'));