const axios = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos/"

const initialTodosState = {
    todos: [],
    isloading: false,
    error: null
}

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
}

const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isloading: true
            }

        default:
            return state
    }
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
            .then((res) => {
                // console.log(res.data);
                res.data.map(r => console.log(r.title))
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData())
